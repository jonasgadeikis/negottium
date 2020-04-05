export default function (data) {
    const errors = [];

    if (!data.email) {
        errors.push('Field Email cannot be empty.');
    }

    if (data.password.length < 6) {
        errors.push('Password must be at least 6 symbols long.');
    }

    if (data.password !== data.repeatPassword) {
        errors.push('Given passwords do not match.');
    }

    console.log(errors);

    return errors.length ? errors : true;
};
