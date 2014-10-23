function paginate() {
    return function(input, page_size) {
        console.log('paginating');
        if(!input) { return []; }

        var nb_pages = Math.ceil(input.length / page_size);
        var pages = [];
        for (var i=0; i<nb_pages; i++){
            pages.push(input.slice(i*page_size, (i+1)*page_size))
        }
        return pages;
    }
}

module.exports = paginate;
