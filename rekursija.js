function faktorialas(sk) {
    if (typeof sk != "number") {
        return undefined;
    }
    if (sk < 0){
        return undefined;
    }
    if (sk === 1){
        return 1;
    }
    return sk * faktorialas(sk-1);
}

console.log(faktorialas("3.141592"));