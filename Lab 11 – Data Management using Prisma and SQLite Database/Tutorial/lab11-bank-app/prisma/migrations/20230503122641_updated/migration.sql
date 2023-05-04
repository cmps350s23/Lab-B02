/*
  Warnings:

  - You are about to drop the column `userAccountNo` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `accountNo` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "transId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transType" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountNo" TEXT NOT NULL,
    CONSTRAINT "Transaction_accountNo_fkey" FOREIGN KEY ("accountNo") REFERENCES "Account" ("accountNo") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("amount", "date", "transId", "transType") SELECT "amount", "date", "transId", "transType" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
