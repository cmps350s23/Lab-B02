-- CreateTable
CREATE TABLE "Account" (
    "accountNo" TEXT NOT NULL PRIMARY KEY,
    "acctType" TEXT NOT NULL,
    "balance" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Transaction" (
    "transId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transType" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userAccountNo" TEXT NOT NULL,
    CONSTRAINT "Transaction_userAccountNo_fkey" FOREIGN KEY ("userAccountNo") REFERENCES "Account" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
