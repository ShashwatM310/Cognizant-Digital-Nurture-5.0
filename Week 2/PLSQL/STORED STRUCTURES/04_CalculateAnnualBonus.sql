CREATE OR REPLACE FUNCTION CalculateAnnualBonus(
    p_salary IN NUMBER
)
RETURN NUMBER
IS
BEGIN
    RETURN p_salary * 0.10;
END;
/

BEGIN
    DBMS_OUTPUT.PUT_LINE(
        'Bonus = ' || CalculateAnnualBonus(50000)
    );
END;
/