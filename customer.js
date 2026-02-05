// ====== CONFIG ======
const CONTRACT_ADDRESS = "0x6bE476aC491e7DE84a940d51048253b184b92d6E";
const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			}
		],
		"name": "BatchCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_meatType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_weightKg",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_sourceName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_slaughterDate",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_proofHash",
				"type": "bytes32"
			}
		],
		"name": "createBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_quantityKg",
				"type": "uint256"
			}
		],
		"name": "createReceipt",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "receiptId",
				"type": "uint256"
			}
		],
		"name": "ReceiptCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum ButcherTraceV2.Status",
				"name": "status",
				"type": "uint8"
			}
		],
		"name": "StatusUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "enum ButcherTraceV2.Status",
				"name": "_status",
				"type": "uint8"
			}
		],
		"name": "updateBatchStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "batches",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "meatType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "weightKg",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "sourceName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "slaughterDate",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "proofHash",
				"type": "bytes32"
			},
			{
				"internalType": "enum ButcherTraceV2.Status",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "createdAt",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			}
		],
		"name": "getBatch",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "enum ButcherTraceV2.Status",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_receiptId",
				"type": "uint256"
			}
		],
		"name": "getReceipt",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextBatchId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextReceiptId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "receipts",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quantityKg",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "createdAt",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Sepolia RPC (no MetaMask needed)
const SEPOLIA_RPC = "https://ethereum-sepolia.publicnode.com";

// Freshness rule
const FRESH_DAYS = 3;

const STATUS = {
  0: "Received",
  1: "Processed",
  2: "InStorage",
  3: "ForSale",
  4: "SoldOut"
};

// ====== STATE ======
let web3, contract;

// ====== HELPERS ======
function $(id) { return document.getElementById(id); }

function formatDate(unixSeconds) {
  const d = new Date(Number(unixSeconds) * 1000);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function freshnessLabel(slaughterUnix) {
  const now = Math.floor(Date.now() / 1000);
  const ageDays = (now - Number(slaughterUnix)) / (60 * 60 * 24);

  if (ageDays <= FRESH_DAYS) return `<span class="badge fresh">Fresh ✅</span>`;
  return `<span class="badge old">Old ⚠️</span>`;
}

// ====== MAIN ======
async function init() {
  try {
    web3 = new Web3(new Web3.providers.HttpProvider(SEPOLIA_RPC));
    contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

    const chainId = await web3.eth.getChainId();
    $("netMsg").innerText = `Connected ✅ Chain ID: ${chainId} (Sepolia = 11155111)`;

    // Auto verify: customer.html?batch=1
    const params = new URLSearchParams(window.location.search);
    const batch = params.get("batch");
    if (batch) {
      $("batchId").value = batch;
      verifyBatch();
    }
  } catch (e) {
    $("netMsg").innerText = "Connection failed ❌ " + (e?.message || e);
  }
}

async function verifyBatch() {
  $("msg").innerText = "Verifying…";
  $("result").style.display = "none";

  const id = Number($("batchId").value);
  if (!id) {
    $("msg").innerText = "Enter a valid Batch ID.";
    return;
  }

  try {
    const b = await contract.methods.getBatch(id).call();

    $("r_id").innerText = b[0];
    $("r_meat").innerText = b[1];
    $("r_kg").innerText = b[2];
    $("r_source").innerText = b[3];
    $("r_date").innerText = formatDate(b[4]);
    $("r_fresh").innerHTML = freshnessLabel(b[4]);
    $("r_hash").innerText = b[5];
    $("r_status").innerText = STATUS[b[6]];

    $("result").style.display = "block";
    $("msg").innerText = "Verified ✅ (data loaded from blockchain)";
  } catch (e) {
    $("msg").innerText = "Not found / not verified ❌ (invalid Batch ID or wrong contract/ABI)";
  }
}

// expose function for onclick in HTML
window.verifyBatch = verifyBatch;

init();
