import CONSTANTS from '../../../modules/Authentication/constants';
import ERRORS from '../../../errors';

export default function (data) {
    const errors = [];

    if (!data.email) {
        errors.push(ERRORS.EMPTY_EMAIL);
    }

    if (data.password.length < CONSTANTS.MIN_PASSWORD_LENGTH) {
        errors.push(ERRORS.INVALID_PASSWORD_LENGTH);
    }

    if (data.password !== data.repeatPassword) {
        errors.push(ERRORS.PASSWORDS_DO_NOT_MATCH);
    }

    return errors.length ? errors : [];
};
