// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ButcherTraceV2 {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    enum Status {
        Received,
        Processed,
        InStorage,
        ForSale,
        SoldOut
    }

    struct Batch {
        uint256 id;
        string meatType;
        uint256 weightKg;
        string sourceName;        // e.g. Abattoir/Farm name
        uint256 slaughterDate;    // UNIX timestamp
        bytes32 proofHash;        // hash of certificate/photo
        Status status;
        uint256 createdAt;
    }

    struct Receipt {
        uint256 id;
        uint256 batchId;
        uint256 quantityKg;
        uint256 createdAt;
    }

    uint256 public nextBatchId = 1;
    uint256 public nextReceiptId = 1;

    mapping(uint256 => Batch) public batches;
    mapping(uint256 => Receipt) public receipts;

    event BatchCreated(uint256 batchId);
    event ReceiptCreated(uint256 receiptId);
    event StatusUpdated(uint256 batchId, Status status);

    // 🥩 Create batch WITH source + freshness proof
    function createBatch(
        string memory _meatType,
        uint256 _weightKg,
        string memory _sourceName,
        uint256 _slaughterDate,
        bytes32 _proofHash
    ) external onlyOwner {
        require(_weightKg > 0, "Weight must be greater than 0");

        batches[nextBatchId] = Batch({
            id: nextBatchId,
            meatType: _meatType,
            weightKg: _weightKg,
            sourceName: _sourceName,
            slaughterDate: _slaughterDate,
            proofHash: _proofHash,
            status: Status.Received,
            createdAt: block.timestamp
        });

        emit BatchCreated(nextBatchId);
        nextBatchId++;
    }

    function updateBatchStatus(uint256 _batchId, Status _status)
        external
        onlyOwner
    {
        require(batches[_batchId].id != 0, "Batch not found");
        batches[_batchId].status = _status;
        emit StatusUpdated(_batchId, _status);
    }

    function createReceipt(uint256 _batchId, uint256 _quantityKg)
        external
        onlyOwner
    {
        Batch storage batch = batches[_batchId];
        require(batch.id != 0, "Batch not found");
        require(batch.status == Status.ForSale, "Not for sale");
        require(_quantityKg > 0, "Invalid quantity");
        require(batch.weightKg >= _quantityKg, "Not enough meat");

        batch.weightKg -= _quantityKg;

        receipts[nextReceiptId] = Receipt({
            id: nextReceiptId,
            batchId: _batchId,
            quantityKg: _quantityKg,
            createdAt: block.timestamp
        });

        emit ReceiptCreated(nextReceiptId);
        nextReceiptId++;
    }

    // 🔍 Read functions (used by admin + customers)
    function getBatch(uint256 _batchId)
        external
        view
        returns (
            uint256,
            string memory,
            uint256,
            string memory,
            uint256,
            bytes32,
            Status,
            uint256
        )
    {
        Batch memory b = batches[_batchId];
        require(b.id != 0, "Batch not found");

        return (
            b.id,
            b.meatType,
            b.weightKg,
            b.sourceName,
            b.slaughterDate,
            b.proofHash,
            b.status,
            b.createdAt
        );
    }

    function getReceipt(uint256 _receiptId)
        external
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        Receipt memory r = receipts[_receiptId];
        require(r.id != 0, "Receipt not found");

        return (
            r.id,
            r.batchId,
            r.quantityKg,
            r.createdAt
        );
    }
}
