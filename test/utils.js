// Source: https://github.com/parity-contracts/kovan-validator-set

const REVERT_ERROR_MSG = 'VM Exception while processing transaction: revert';
const DEFAULT_ADDRESS = "0x0000000000000000000000000000000000000000";

async function assertThrowsAsync(fn, msg) {
    try {
        await fn();
    } catch (err) {
        console.log("caught")
        assert(err.message.includes(msg), "Expected error to include: " + msg);
        return;
    }
    assert.fail("Expected fn to throw");
}

module.exports = {
    assertThrowsAsync,
    REVERT_ERROR_MSG,
    DEFAULT_ADDRESS
};
