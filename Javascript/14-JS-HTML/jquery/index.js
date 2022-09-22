// $('li').hide();
// $(document).ready(()=>{

// });

$(()=>{
    // $("#el-1").hide();
    $(".hide-btn").click(()=>{
        $('li').hide();
        $('.hide-btn').hide();
        $('.show-btn').show();
        $('h1').fadeOut();
    });
    $(".show-btn").click(()=>{
        $('li').show();
        $('.hide-btn').show();
        $('.show-btn').hide();
        $('h1').fadeIn();
    });

    $('li').click(()=>{
        $('h1').css({color: "red"});
    })

    $('.new-element').click(()=>{
        // $('ul').append('<li>New Element</li>')
        $('ul').prepend('<li>New Element</li>')
    });

    $('li').mouseenter((elem)=>{
        console.log('Ha entrado el raton (hover)');
        elem.target.style.color = 'blue';
    });

    $('li').mouseleave((elem)=>{
        elem.target.style.color = 'black';
    });


 
});