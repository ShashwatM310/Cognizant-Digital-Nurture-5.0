CREATE OR REPLACE PACKAGE BankPackage AS
    PROCEDURE ShowBalance(
        p_account_id NUMBER
    );
END BankPackage;
/

CREATE OR REPLACE PACKAGE BODY BankPackage AS

    PROCEDURE ShowBalance(
        p_account_id NUMBER
    )
    IS
        v_balance NUMBER;
    BEGIN
        SELECT balance
        INTO v_balance
        FROM accounts
        WHERE account_id = p_account_id;

        DBMS_OUTPUT.PUT_LINE(
            'Balance = ' || v_balance
        );
    END;

END BankPackage;
/