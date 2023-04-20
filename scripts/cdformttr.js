let codes = document.querySelectorAll('.code');
let reds = ['extends ', 'func ', 'var ', 'print', 'const ', ' and ', ' or ', ' load', ' preload', 'onready', '@onready', 'true', 'false']
let pinks = ['elif ', 'if ', 'else:', 'for ', 'while ', 'pass', 'return']
let aqua = ['_ready()', '_process()', '_process(delta)', 
            '_physics_process(delta)', '_physics_process()', 
            '_init()', '_input(event)', '_get(property)', 'sum', 'size()', 'instance()', 'get_tree()', '_draw()', 'show()', 'hide()', 'new()', 'reload()', 'set_pressed', 'set_script', 'close()']
let greens = ['Input', 'Vector2', 'Vector3', '$', 'GDScript.', 'Reference.', 'AudioStreamPlayer', 'AudioStreamMP3', 'AudioStreamOGGVorbis']
for (var i = 0; i < codes.length; i++) {
    reds.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: #ff4040;">'+element+'</text>')
    });
    aqua.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: aqua;">'+element+'</text>')
    });
    pinks.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: deeppink;">'+element+'</text>')
    });
    greens.forEach(element => {
        codes[i].innerHTML = codes[i].innerHTML.replaceAll(element, '<text style="color: MediumSpringGreen;">'+element+'</text>')
    });
}