class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
        this.alteredCollection = [...collection];
        this.numOfPage = 0;
    }
    itemCount() {
        // Retorna o número total de itens.
        const numOfItens = this.collection.length;
        return numOfItens;
    }
    pageCount() {
        // Retorna o número total de páginas.
        // let multiple;
        // let count = 1;
        // this.collection.map((item, index) => {
        //     multiple = this.itemsPerPage * count;
        //     if (index + 1 === multiple) {
        //         this.numOfPage++
        //         count++;
        //         this.alteredCollection = this.collection.slice(0, multiple);
        //     }
        // })
        // if (this.collection.length > this.alteredCollection.length) this.numOfPage++;
        // return this.numOfPage;

        // uma lógica bem mais simples e funcional
        this.numOfPage = Math.ceil(this.collection.length / this.itemsPerPage);
        return this.numOfPage;

    }
    pageItemCount(pageIndex) {
        // Retorna o número de itens em uma página específica.
        // Se a página for inválida, o retorno deve ser -1.
        const totalFullPages = (Math.floor(this.collection.length / this.itemsPerPage)) - 1;
        const totalIncompletePageItems = this.collection.length % this.itemsPerPage;
        if (pageIndex > this.numOfPage - 1) return -1;
        if (pageIndex < 0) return - 1;
        if (pageIndex <= totalFullPages) return this.itemsPerPage;
        if (pageIndex > totalFullPages) return totalIncompletePageItems;
    }
    pageIndex(itemIndex) {
        // Retorna a página à qual um item pertence.
        // Se o índice do item for inválido, o retorno deve ser -1.
        // let inicio = 0;
        // let fim = this.itemsPerPage;
        // let page = 0;
        // for (let i = 0; i < this.collection.length; i++) {
        //     this.alteredCollection = this.collection.slice(inicio, fim);
        //     console.log(this.alteredCollection)
        //     if (!this.alteredCollection[itemIndex]) {
        //         page++;
        //         inicio = fim;
        //         fim += this.itemsPerPage;
        //     } else if (this.alteredCollection.indexOf(valueOfIndex) !== -1) return page;
        // }

        // uma lógica bem mais simples e funcional
        if (itemIndex < 0 || itemIndex >= this.collection.length) return -1;
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

const marcaTexto = new PaginationHelper([1, 2, 3, 4, 5, 6, 7], 3);
console.log(marcaTexto.itemCount());
console.log(marcaTexto.pageCount());
console.log(marcaTexto.pageItemCount(0));
console.log(marcaTexto.pageIndex(19));