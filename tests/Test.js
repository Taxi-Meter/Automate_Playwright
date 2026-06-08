
function saplit(input){
        const cut = input.split('"');
        const cutSpace = cut[1].split(" ");
        const color = cutSpace[0]
        console.log(color);
};

const cl = '<div class="color-green love-mx">Success</div>';
saplit(cl);

