fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json =>  {

    let x = document.querySelector('.main_people');
    [...x.querySelectorAll('.main_pursone')].map((y, i) => {
        if (i < 10 && json[i]) y.querySelector('h3').textContent = json[i].username;
    });

    [...document.querySelectorAll('.suggestion')].map((s, i) => {
        if (i < 3) {
            let z = s.querySelector('.info');
            z.querySelector('strong').textContent = json[i].username;
            z.querySelector('small').textContent = json[i].company.name;
        }
    });

    let a = json[0];
    let b = {
        h: document.querySelector('.user-info strong'),
        l: document.querySelector('.location'), 
        c: document.querySelector('.caption strong')
    };

    b.h && (b.h.textContent = a.username);
    b.l && (b.l.textContent = `${a.address.city}, ${a.address.country}`);
    b.c && (b.c.textContent = a.username);
    
    [...document.querySelectorAll('.comment strong')].map((c, i) => {
        json[i + 1] && (c.textContent = json[i + 1].username);
    });
})
.catch(e => console.error('oops:', e));