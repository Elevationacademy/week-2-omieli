const posts = [
    {
        name:"Golda",
        text:"WOOF WOOF"
    },
    {
        name:"Mazal",
        text:"hey"
    },
    {
        name:"josef",
        text:"how are you"
    },
    {
        name:"MOM",
        text:"GOD BLESS"
    }
]

const render = function(){
    for(let post of posts){
        $('.posting').append('<div class=post> ${post} </div>');
    }
}
render()

