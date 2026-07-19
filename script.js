// Hero ledger: renders a small feed of anonymized transactions,
// one of which gets flagged — a nod to the anomaly-detection work
// described in the About section.

const TRANSACTIONS = [
  { id: "TXN_88213", amount: "KES 4,200", status: "ok" },
  { id: "TXN_88214", amount: "KES 12,050", status: "ok" },
  { id: "TXN_88215", amount: "KES 340,000", status: "flag", label: "ANOMALY DETECTED" },
  { id: "TXN_88216", amount: "KES 2,100", status: "ok" },
  { id: "TXN_88217", amount: "KES 8,750", status: "ok" },
  { id: "TXN_88218", amount: "KES 15,300", status: "ok" },
];

function buildLedger() {
  const body = document.getElementById("ledgerBody");
  if (!body) return;

  TRANSACTIONS.forEach((txn, i) => {
    const row = document.createElement("div");
    row.className = "ledger-row" + (txn.status === "flag" ? " is-flagged" : "");
    row.style.animationDelay = `${0.15 + i * 0.12}s`;

    const statusText = txn.status === "flag" ? (txn.label || "FLAGGED") : "cleared";
    const statusClass = txn.status === "flag" ? "status--flag" : "status--ok";

    row.innerHTML = `
      <span>${txn.id}</span>
      <span>${txn.amount}</span>
      <span class="status ${statusClass}">${statusText}</span>
    `;
    body.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", buildLedger);
