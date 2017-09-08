class DOMNodeCollection {
  constructor(nodes){
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach(cb);
  }

  html(html){
    if (typeof html === "string") {
      this.each(node => node.innerHTML = html);
    } else {
      if (this.nodes.length > 0) {
        return this.nodes[0].innerHTML;
      }
    }
  }


  empty(){
    this.html('');
  }

  find(selector) {
    let found = [];
    this.each(node => {
      const nodeList = node.querySelectorAll(selector);
      found = found.concat(Array.from(nodeList));
    });
    return new DOMNodeCollection(found);
  }

  on(evnt, callback){
    this.each(node => node.addEventListener(evnt, callback));

  }

  off(evnt){
    this.each(node => node.removeEventListener(evnt));
  }

  attr(key, val){
    if (typeof val === "string") {
     this.each( node => node.setAttribute(key, val) );
   } else {
     return this.nodes[0].getAttribute(key);
   }
  }

  addClass(cls){
    this.each(el => el.classList.add(cls));
  }

  removeClass(cls){
    this.each(el => el.classList.remove(cls));
  }



}

module.exports = DOMNodeCollection;


//<div class="div1"> <ul> </ul> </div>
