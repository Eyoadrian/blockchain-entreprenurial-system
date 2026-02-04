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

// ====== STATE ======
let web3, contract, account;

const STATUS = {
  0: "Received",
  1: "Processed",
  2: "InStorage",
  3: "ForSale",
  4: "SoldOut"
};

// ====== HELPERS ======
function $(id) {
  return document.getElementById(id);
}

function formatDate(unixSeconds) {
  const d = new Date(Number(unixSeconds) * 1000);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function freshnessInfo(slaughterUnix) {
  const now = Math.floor(Date.now() / 1000);
  const ageSeconds = now - Number(slaughterUnix);
  const ageDays = ageSeconds / (60 * 60 * 24);

  if (ageDays <= 3) return { label: "Fresh ✅", className: "fresh" };
  return { label: "Old ⚠️", className: "old" };
}

function fillBatchId(id) {
  $("batchId").value = id;
  $("rBatchId").value = id;
  $("checkBatchId").value = id;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ====== MAIN ======
async function connect() {
  if (!window.ethereum) return alert("Install MetaMask");
  await ethereum.request({ method: "eth_requestAccounts" });

  web3 = new Web3(window.ethereum);
  account = (await web3.eth.getAccounts())[0];
  contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

  $("account").innerText = "Connected: " + account;
  $("network").innerText = "Chain ID: " + await web3.eth.getChainId() + " (Sepolia = 11155111)";

  loadBatches();
}

async function createBatch() {
  if (!contract || !account) return alert("Connect MetaMask first.");

  $("createMsg").innerText = "Creating batch...";
  $("latestBatch").innerText = "";

  try {
    const meat = $("meatType").value.trim();
    const kg = Number($("weightKg").value);
    const source = $("sourceName").value.trim();

    // Date -> Unix timestamp (seconds)
    const dateStr = $("slaughterDate").value; // YYYY-MM-DD
    if (!dateStr) throw new Error("Pick a slaughter date");
    const unixSlaughter = Math.floor(new Date(dateStr + "T00:00:00").getTime() / 1000);

    // Proof -> bytes32 hash (file OR text)
    const file = $("proofFile").files[0];
    const text = $("proofText").value.trim();
    if (!file && !text) throw new Error("Upload a proof file OR type proof text");

    let proofBytes32;
    if (file) {
      const buf = await file.arrayBuffer();
      proofBytes32 = web3.utils.sha3(new Uint8Array(buf));
    } else {
      proofBytes32 = web3.utils.sha3(text);
    }

    if (!proofBytes32 || proofBytes32.length !== 66) throw new Error("Proof hash generation failed");

    const tx = await contract.methods
      .createBatch(meat, kg, source, unixSlaughter, proofBytes32)
      .send({ from: account });

    const id = tx.events.BatchCreated.returnValues.batchId;

    $("createMsg").innerText = "Batch created ✅";
    $("latestBatch").innerText = "New Batch ID: " + id;
    fillBatchId(id);
    loadBatches();
  } catch (e) {
    $("createMsg").innerText = "Error ❌ " + (e?.message || e);
  }
}

async function updateStatus() {
  $("statusMsg").innerText = "Updating...";
  await contract.methods
    .updateBatchStatus($("batchId").value, $("status").value)
    .send({ from: account });

  $("statusMsg").innerText = "Status updated ✅";
  loadBatches();
}

async function createReceipt() {
  $("receiptMsg").innerText = "Creating receipt...";
  $("latestReceipt").innerText = "";

  const tx = await contract.methods
    .createReceipt($("rBatchId").value, $("qtyKg").value)
    .send({ from: account });

  const id = tx.events.ReceiptCreated.returnValues.receiptId;
  $("latestReceipt").innerText = "New Receipt ID: " + id;
  $("checkReceiptId").value = id;

  loadBatches();
}

async function loadBatches() {
  $("batchListMsg").innerText = "Loading batches...";
  $("batchTableBody").innerHTML = "";

  const nextId = await contract.methods.nextBatchId().call();

  if (Number(nextId) <= 1) {
    $("batchTableBody").innerHTML = `<tr><td colspan="8" class="muted">No batches found yet.</td></tr>`;
    $("batchListMsg").innerText = "No batches yet.";
    return;
  }

  for (let i = 1; i < nextId; i++) {
    try {
      const b = await contract.methods.getBatch(i).call();

      const id = b[0];
      const meat = b[1];
      const kg = b[2];
      const source = b[3];
      const slaughterUnix = b[4];
      const statusEnum = b[6];

      const slaughterFormatted = formatDate(slaughterUnix);
      const fresh = freshnessInfo(slaughterUnix);

      $("batchTableBody").innerHTML += `
        <tr>
          <td><span class="pill">#${id}</span></td>
          <td>${meat}</td>
          <td>${kg}</td>
          <td>${source}</td>
          <td>${slaughterFormatted}</td>
          <td><span class="badge ${fresh.className}">${fresh.label}</span></td>
          <td>${STATUS[statusEnum]}</td>
          <td><button class="secondary" onclick="fillBatchId(${id})">Use</button></td>
        </tr>
      `;
    } catch (e) {}
  }

  $("batchListMsg").innerText = "Loaded batches successfully ✅";
}

async function getBatch() {
  const b = await contract.methods.getBatch($("checkBatchId").value).call();
  $("batchOut").innerText =
`Batch ID: ${b[0]}
Meat: ${b[1]}
KG Left: ${b[2]}
Source: ${b[3]}
Slaughter Date (unix): ${b[4]}
Proof Hash: ${b[5]}
Status: ${STATUS[b[6]]}
Created At (unix): ${b[7]}`;
}

async function getReceipt() {
  const r = await contract.methods.getReceipt($("checkReceiptId").value).call();
  $("receiptOut").innerText =
`Receipt ID: ${r[0]}
Batch ID: ${r[1]}
Quantity KG: ${r[2]}
Created At (unix): ${r[3]}`;
}

// Reload on account/network changes
if (window.ethereum) {
  ethereum.on("accountsChanged", () => location.reload());
  ethereum.on("chainChanged", () => location.reload());
}
