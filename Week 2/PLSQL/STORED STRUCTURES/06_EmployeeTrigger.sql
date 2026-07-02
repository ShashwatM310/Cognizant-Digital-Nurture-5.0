CREATE OR REPLACE TRIGGER EmployeeSalaryAudit
BEFORE UPDATE OF salary
ON employees
FOR EACH ROW
BEGIN
    DBMS_OUTPUT.PUT_LINE(
        'Salary changing from '
        || :OLD.salary
        || ' to '
        || :NEW.salary
    );
END;
/