function change(index){
    const p = document.querySelector('.show-classdemo')

    switch(index){
        case 1:
            p.innerHTML = '<iframe width="100%" height="100%" src="./index.html" />'
            break;    
            case 2:
                p.innerHTML= '<iframe width="100%" height="100%" src="./hero/heropage.html" />'
                break;
            case 3:
                p.innerHTML= '<iframe width="100%" height="100%" src="./resume/index.html" />'       
            break;
                case 4:
                p.innerHTML= '<iframe width="100%" height="100%" src="./w04/blog.html" />'
            break;
            
            }
}