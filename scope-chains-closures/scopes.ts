function foo() {
    var bar;
    quux = true;
    function zip() {
        var quux = false;
        bar = true;
    }
    return zip;
}