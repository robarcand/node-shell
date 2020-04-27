module.exports = function() {
    const cmd = process.cwd();

    process.stdout.write('Your current file path is: ' + cmd);
    process.stdout.write('\nprompt > ');
}