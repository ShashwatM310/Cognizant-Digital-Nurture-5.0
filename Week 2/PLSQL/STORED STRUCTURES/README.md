# Banking Stored Procedures

This project contains a collection of PL/SQL stored procedures for common banking operations.

## Overview of Procedures

1. **ProcessMonthlyInterest**  
   Applies a 1% monthly interest to all savings accounts.

2. **UpdateEmployeeBonus**  
   Increases the salary of employees in a specified department by a given bonus percentage.

3. **TransferFunds**  
   Transfers a specified amount from one account to another, with balance validation.

## Usage Instructions

You can execute these procedures using Oracle SQLcl, SQL*Plus, or the Oracle SQL extension in Visual Studio Code.

Setting Up in Visual Studio Code
Open Visual Studio Code and create a new folder named BankingStoredProcedures.

Inside this folder, create the following SQL files:

01_ProcessMonthlyInterest.sql

02_UpdateEmployeeBonus.sql

03_TransferFunds.sql

Install and configure the Oracle SQL extension or open an integrated terminal using Oracle SQLcl.

Connect to your Oracle database and run the .sql scripts in sequence.

Prerequisites
Oracle Database

Oracle SQLcl or SQL*Plus

Visual Studio Code (optional)

Oracle SQL extension for Visual Studio Code (optional)

### Execution Order

Run the following scripts in order to define the procedures:

```sql
@01_ProcessMonthlyInterest.sql
@02_UpdateEmployeeBonus.sql
@03_TransferFunds.sql

Sample Execution
Once the procedures are defined, execute them using:

sql

EXEC ProcessMonthlyInterest;
EXEC UpdateEmployeeBonus(10, 5);    -- Department ID 10, Bonus 5%
EXEC TransferFunds(101, 102, 500);  -- Transfer 500 from account 101 to 102
