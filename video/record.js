var rqConfig =
{
    paths:
    {
        'util': '/landing/js/util',
        'DemoManager': '/landing/js/DemoManager'
    },
    waitSeconds: 0
};

require.config(rqConfig);

requirejs(['util', 'DemoManager'], function (util, DemoManager)
{
var elementCache = {};
function el(id)
{
    return (typeof id == 'string') ?
            (elementCache[id] || (elementCache[id] = document.getElementById(id))) :
            id;
}
function addPrefix(p)
{
    var prefix = '';
    var v = [ 'ms', 'webkit', 'moz', 'o' ];
    var s = document.body.style;
    var p2 = p.charAt(0).toUpperCase() + p.slice(1);
    if (typeof s[p] == 'string')
    {
        prefix = '';
    }
    else
    {
        for ( var i = 0; i < v.length; i++) {
            if (typeof s[v[i] + p2] == 'string') {
                prefix = v[i];
                break;
            }
        }
    }

    var styleString = (prefix.length > 0) ? p.charAt(0).toUpperCase() + p.slice(1) : p;

    if (prefix)
    {
        return prefix + styleString;
    }
    else
    {
        return styleString;
    }
}

var transform = 'transform';
var transition = 'transition';
var animation = 'animation';
var animationDelay = 'animationDelay';

window.log = console.log.bind(console);

transform = addPrefix('transform');
transition = addPrefix('transition');
animation = addPrefix('animation');
animationDelay = addPrefix('animationDelay');

var demoDatas = {
    'intro': {
        data: 'intro.intro',
        panes: 'PaneGmail:1:2',
        script: 'intro'
    },
    'kanban': {
        data: 'intro.kanban',
        panes: '1,,kIdeas:1,,kTodo:1,,kProgress:1,,kTesting',
        script: 'kanban'
    },
    'gtd': {
        data: 'intro.gtd',
        panes: '1,,inbox:1,,projects:2,#mobile',
        script: 'gtd'
    },
    'project': {
        data: 'intro.project',
        panes: '1,,todo:1,+Jay -//:1,#Android',
        script: "projectManagement"
    },
    'inbox': {
        data: 'intro.inbox',
        panes: 'PaneGmail:1:1,,respond',
        script: 'inboxZero'
    }
};

var demoData = [];

function createDemo(id, name)
{
    var d = demoDatas[name];
    var src = '/app/#demo=true&touch=false&dmode=0x1091&data=' +
                d.data +
                '&panes=' +
                d.panes +
                '&script=' +
                (d.script ? d.script : 'none');

    return {
        id: id,
        src: src,
        noMobile: true
    };
}
DemoManager.registerDemo(createDemo('demoIntro', 'intro'));

DemoManager.config({});

DemoManager.beginLoading();



var messageHandlers = {};

function receiveFrameMessage(e)
{
    console.log('Received: ' + e.data);
    if(messageHandlers[e.data])
    {
        messageHandlers[e.data]();
    }
    else
    {
        switch(e.data)
        {
            case 'demo_started':
                el('topDemo').style.opacity = 1;
                break;
            case 'demo_done':
                var elements = el('checkboxes').children;
                for(var i = 0; i < elements.length; i ++)
                {
                    elements[i].style[animationDelay] = (i * 0.15 + 0.5) + 's';
                    log(animationDelay, elements[i].style[animationDelay]);
                }
                document.documentElement.classList.add('demoDone');
                break;
        }
    }
}
window.addEventListener('message', receiveFrameMessage, false);

function sendFrameMessage(id, data)
{
    var ele = document.getElementById(id);

    if (ele)
    {
        var frame = ele.contentWindow;
        if (frame)
        {
            frame.postMessage(data, '*');
        }
    }
    else if(DEBUG)
    {
        debugger;
    }
}


function runAnimations()
{
    // Animations
    var textEl = el('i1Title');
    function setStyle(time, id, key, value)
    {
        var e = el(id);
        e.style[transition] = time ? ('all ' + time + 'ms ease-in-out') : '';
        e.style[key] = value;
    }
    function move(time, id, x, y)
    {
        setStyle(time, id, transform, 'translate(' + x + 'px,' + y + 'px)');
    }
    function scale(time, id, x, y)
    {
        setStyle(time, id, transform, 'scale(' + x + ',' + y +')');
    }
    function addClass(time, id, cls)
    {
        var e = el(id);
        e.classList.add(cls);
    }
    function removeClass(time, id, cls)
    {
        var e = el(id);
        e.classList.remove(cls);
    }
    function hide(time, id)
    {
        setStyle(time, id, 'opacity', 0);
    }
    function show(time, id)
    {
        setStyle(time, id, 'opacity', 1);
    }
    function fadeText(time, id, nonfade, fade)
    {
        var e = el(id);
        var width = e.getBoundingClientRect().width;
        e.innerHTML = '<span>' + nonfade + '</span><span class="fadeIn1s">' + fade + '</span>';
        // var width2 = e.getBoundingClientRect().width;
        // offset += -width2 / 2;
        // if(delay)
        // {
        //     setTimeout(function(){
        //         setStyle(time, id, transform, 'translate(' + offset + 'px,' + y + 'px)');
        //     }, delay);
        // }
        // else
        //     setStyle(time, id, transform, 'translate(' + offset + 'px,' + y + 'px)');

        // log(width, width2);
    }
    function setHTML(time, id, html)
    {
        var e = el(id);
        e.innerHTML = html;
    }
    function type(time, id, text, index)
    {
        index = index || 0;
        var e = el(id);
        var str = text.substr(0, index + 1);
        e.innerText = str;
        if(text.length > index + 1)
            setTimeout(type, time, time, id, text, index + 1);
    }
    function setText(time, id, text)
    {
        var e = el(id);
        e.innerText = text;
    }
    function sendMsg(time, id, data)
    {
        sendFrameMessage(id, data);
    }
    function loadDemo(time, name, script)
    {
        var d = demoDatas[name];
        var msg = 'data=' + d.data +
                  '&panes=' + d.panes;
        if(script)
            msg += '&script=' + name;

        sendFrameMessage('demoIntro', msg);
    }
    function startScript(time, name)
    {
        var msg = 'script=' + name;
        sendFrameMessage('demoIntro', msg);
    }


    var animQueue = [];
    var animIndex = -1;

    function q()
    {
        animQueue.push(Array.prototype.slice.call(arguments, 0));
    }
    function d(time)
    {
        animQueue.push(time);
    }
    function wait(msg)
    {
        animQueue.push(msg);
    }

    function runNext()
    {
        do
        {
            animIndex ++;

            var next = animQueue[animIndex];
            if(next)
            {
                if(!isNaN(next))
                {
                    // next is a delay
                    setTimeout(runNext, next);
                    break;
                }
                if(typeof next === 'string')
                {
                    messageHandlers[next] = runNext;
                    break;
                }
                var time = next[0];
                var fn = next[1];
                next.splice(1, 1);
                fn.apply(fn, next);
            }
        } while(next)
    }


    // Starting positions
    var cardsPos = 70;
    var demoPos = cardsPos;
    q(0, move, 'i1Title', -135, 15);
    q(0, move, 'i1Title2', -135, 50);
    q(0, move, 'i1Cards', 0, cardsPos);
    q(0, move, 'demoIntroWrapper', 315, demoPos);
    d(500);

    q(1000, show, 'i1Title');
    q(1000, show, 'i1Title2');
    q(0, fadeText, 'i1Title', '', 'Organize all your stuff');
    d(2000);
    q(0, show, 'i1Cards');
    for(var i = 0; i < 6; i ++)
    {
        q(200, show, 'i1C' + i);
        q(200, setStyle, 'i1C' + i, 'box-shadow', '0 1px 4px rgba(0,0,0,0.3)');
        d(140);
    }
    d(1000);

    q(1000, move, 'i1Cards', 0, cardsPos + 40);
    for(var i = 0; i < 6; i ++)
    {
        q(1000, setStyle, 'i1C' + i, 'box-shadow', '');
        q(1000, move, 'i1C' + i, 0, -i * 20);
    }
    d(200);
    q(0, fadeText, 'i1Title2', '', 'together');
    q(400);

    q(0, addClass, 'i1Cards', 'show');

    d(1500);
    q(1000, fadeText, 'i1Title2', 'together ', 'in a simple outline');
    // wait('z');
    q(0, setStyle, 'i1CardsEls', 'overflow', 'hidden');
    for(var i = 0; i < 6; i ++)
    {
        var x;
        if(i > 0)
            x = 50;
        if(i == 3)
            x = 100;
        q(1000, move, 'i1C' + i, x, -i * 20);
    }
    d(2000);
    q(1000, setStyle, 'i1Cards', 'opacity', 0);
    q(1000, setStyle, 'i1Title', 'opacity', 0);
    q(1000, setStyle, 'i1Title2', 'opacity', 0);
    d(1000);

    q(1000, setStyle, 'i1Title', 'opacity', 1);
    q(0, setText, 'i1Title', '');

    q(1000, setStyle, 'demoIntroWrapper', 'opacity', 1);
    q(0, sendMsg, 'demoIntro', 'start');


    q(0, move, 'i1Title', -110, 15);
    q(0, fadeText, 'i1Title', '', 'This is your email');


    wait('showSecondPane');

    q(1000, move, 'demoIntroWrapper', 160, demoPos);
    q(1000, fadeText, 'i1Title', 'This is your email', '');
    q(0, setStyle, 'i1Title2', 'opacity', 1);
    q(0, move, 'i1Title2', 190, 15);
    q(0, fadeText, 'i1Title2', '', '', 200);
    q(1000, fadeText, 'i1Title2', '', 'This is your todo list');
    q(1000, move, 'i1Title', -270, 15);
    q(1000, move, 'i1Title2', 25, 15);

    wait('showEmails');

    q(1000, fadeText, 'i1Title', 'This is your email', ' on');
    q(0, setHTML, 'i1Title2', '<span class="fadeOut500ms">This is </span><span>your todo list</span>');
    q(1000, move, 'i1Title', -225, 15);
    q(1000, move, 'i1Title2', -50, 15);


    // q(60, type, 'i1Title', 'This is your email on your todo list');
    // q(1000, move, 'i1Title', 0, 15);
    // q(1000, hide, 'i1Title2');

    wait('showAgenda');
    q(0, hide, 'i1Title2');
    q(1000, fadeText, 'i1Title', 'This is your emails and todo list ', 'on your calendar');
    q(1000, move, 'i1Title', -320, 15);
    q(1000, move, 'demoIntroWrapper', 0, demoPos);


    wait('done');
    // q(1000, hide, 'i1Title');
    // d(1000);
    // q(0, fadeText, 'i1Title', '', '');
    // q(0, show, 'i1Title');

    // q(0, fadeText, 'i1Title', '', 'This is a live demo. Try it!');
    q(1000, hide, 'demoIntroWrapper');
    q(1000, hide, 'i1Title');
    d(1000);
    q(0, move, 'i1Title', -150, 15);
    q(0, setText, 'i1Title', 'Organize however you want');
    d(100);
    q(1000, show, 'i1Title');
    q(0, loadDemo, 'kanban');
    d(2500);
    q(0, setHTML, 'i1Title', 'Organize <span class="fadeOut500ms">however you want</span>');
    d(1500);
    q(1000, fadeText, 'i1Title', 'Organize ', 'with kanban boards');
    d(1500);
    q(1000, show, 'demoIntroWrapper');
    q(0, startScript, 'kanban');
    wait('done');

    q(0, setHTML, 'i1Title', 'Organize <span class="fadeOut500ms">with kanban boards</span>');
    q(1000, hide, 'demoIntroWrapper');
    d(1000);
    q(0, loadDemo, 'gtd');
    q(0, move, 'i1Title', -150, 15);
    q(1000, fadeText, 'i1Title', 'Organize ', 'with GTD');
    d(1000);
    q(1000, show, 'demoIntroWrapper');
    d(1000);
    q(0, startScript, 'gtd');
    wait('done');

    q(1000, hide, 'i1Title');
    q(1000, hide, 'demoIntroWrapper');
    d(1000);
    q(0, loadDemo, 'project');
    q(0, move, 'i1Title', -170, 15);
    q(0, setText, 'i1Title', 'Manage your team\'s projects');
    q(1000, show, 'i1Title');
    d(1000);
    q(1000, show, 'demoIntroWrapper');
    d(1000);
    q(0, startScript, 'projectManagement');
    wait('done');

    q(1000, hide, 'i1Title');
    q(1000, hide, 'demoIntroWrapper');
    d(1000);
    q(0, loadDemo, 'inbox');
    q(0, move, 'i1Title', -130, 15);
    q(0, setText, 'i1Title', 'Achieve Inbox Zero');
    q(1000, show, 'i1Title');
    d(1000);
    q(1000, show, 'demoIntroWrapper');
    d(1000);
    q(0, startScript, 'inboxZero');
    wait('done');



    d(1000000);

/*

    wait('showDemos');
    q(1000, addClass, 'introDemoBG', 'show');
    d(1000000);
    q(1000, setStyle, 'i1Title', 'opacity', 0);
    q(1000, setStyle, 'i1Subtitle', 'opacity', 0);
    d(1000);

    q(0, setStyle, 'introDemoElements', 'opacity', 1);
    var a1 = [].slice.call(el('introDemoTop').children);
    var a2 = [].slice.call(el('introDemoBottom').children);

    q(1000, move, 'demoIntroWrapper', 0, demoPos + 50);
    q(0, addClass, 'demoIntro', 'demoShrink');
    var demos = [el('introTopSubtitle')]
                .concat(a1)
                .concat([el('introBotSubtitle')]
                .concat(a2));
    for(var i = 0; i < demos.length; i ++)
    {
        q(1000, show, demos[i]);
        d(200);
    }
*/

    runNext();
}

runAnimations();

});