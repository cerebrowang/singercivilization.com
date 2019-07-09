import { PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import { Debouncer} from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut} from '@polymer/polymer/lib/utils/async.js';
import 'polymerfire3/polymerfire.js';

let categoryList = [{
    name: 'science',
    title: 'Science',
    image: 'images/science.jpg',
    placeholder: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAXAABAQEAAAAAAAAAAAAAAAAAAAIEAQEAAAAAAAAAAAAAAAAAAAACEAAAAwYHAQAAAAAAAAAAAAAAERMBAhIyYhQhkaEDIwUVNREBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A3dkr5e8tfpwuneJITOzIcmQpit037Bw4mnCVNOpAAQv/2Q=='
  },
  {
    name: 'technology',
    title: 'Technology',
    image: 'images/technology.jpg',
    placeholder: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAWQABAQAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAIDEAABAwMFAQAAAAAAAAAAAAARAAEygRIDIlITMwUVEQEBAAAAAAAAAAAAAAAAAAAAQf/aAAwDAQACEQMRAD8Avqn5meQ0kwk1UyclmLtNj7L4PQoioFf/2Q=='
  },
  {
    name: 'engineering',
    title: 'Engineering',
    image: 'images/engineering.jpg',
    placeholder: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAWwABAQEAAAAAAAAAAAAAAAAAAAMEAQEAAAAAAAAAAAAAAAAAAAAAEAABAwEJAAAAAAAAAAAAAAARAAESEyFhodEygjMUBREAAwAAAAAAAAAAAAAAAAAAAEFC/9oADAMBAAIRAxEAPwDb7kupZU1MTGnvOCgxpvzEXTyRElCmf//Z'
  },
  {
    name: 'art',
    title: 'Art',
    image: 'images/art.jpg',
    placeholder: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAXwABAQEAAAAAAAAAAAAAAAAAAAMFAQEBAAAAAAAAAAAAAAAAAAABAhAAAQIDCQAAAAAAAAAAAAAAEQABITETYZECEjJCAzMVEQACAwAAAAAAAAAAAAAAAAAAATFBgf/aAAwDAQACEQMRAD8AzeADAZiFc5J7BC9Scek3VrtooilSNaf/2Q=='
  },
  {
    name: 'mathematics',
    title: 'Mathematics',
    image: 'images/mathematics.jpg',
    placeholder: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAADAA4DASIAAhEBAxEB/8QAXwABAQEAAAAAAAAAAAAAAAAAAAMFAQEBAAAAAAAAAAAAAAAAAAABAhAAAQIDCQAAAAAAAAAAAAAAEQABITETYZECEjJCAzMVEQACAwAAAAAAAAAAAAAAAAAAATFBgf/aAAwDAQACEQMRAD8AzeADAZiFc5J7BC9Scek3VrtooilSNaf/2Q=='
  }
];

class ShopCategoryData extends PolymerElement {

  static get template() {
    return html `
    <firebase-query
      path="/categories"
      data="{{items}}">
    </firebase-query>
`;
  }

  static get is() {
    return 'shop-category-data';
  }

  static get properties() {
    return {

      categoryName: String,

      itemName: String,

      categories: {
        type: Array,
        value: categoryList,
        readOnly: true,
        notify: true
      },

      category: {
        type: Object,
        computed: '_computeCategory(categoryName)',
        notify: true
      },

      items: {
        type: Object,
        notify:true
      },

      item: {
        type: Object,
        computed: '_computeItem(category.items, itemName)',
        notify: true
      },

      failure: {
        type: Boolean,
        notify: true,
        readOnly: true
      }

    }
  }

  static get observers() { return [
    '_itemsChange(items.splices)'
  ]}

  _itemsChange(items) {
    this.set('category.items', items);
  }
  
  _getCategoryObject(categoryName) {
    for (let i = 0, c; c = this.categories[i]; ++i) {
      if (c.name === categoryName) {
        return c;
      }
    }
  }

  _computeCategory(categoryName) {
    // Fetch the items of the category. Note that the fetch is asynchronous,
    // which means `category.items` may not be set initially (but that path
    // will be notified when the fetch completes).
    let categoryObj = this._getCategoryObject(categoryName);
    // this._fetchItems(categoryObj, 1);
    return categoryObj;
  }

  _computeItem(items, itemName) {
    if (!items || !itemName) {
      return;
    }
    for (let i = 0, item; item = items[i]; ++i) {
      if (item.name === itemName) {
        return item;
      }
    }
  }

  // _fetchItems(category, attempts) {
  //   this._setFailure(false);
  //   // Only fetch the items of a category if it has not been previously set.
  //   if (!category || category.items) {
  //     return;
  //   }
  //   this._getResource({
  //     url: 'data/' + category.name + '.json',
  //     onLoad(e) {
  //       this.set('category.items', JSON.parse(e.target.responseText));
  //     },
  //     onError(e) {
  //       this._setFailure(true);
  //     }
  //   }, attempts);
  // }

  // _getResource(rq, attempts) {
  //   let xhr = new XMLHttpRequest();
  //   xhr.addEventListener('load', rq.onLoad.bind(this));
  //   xhr.addEventListener('error', (e) => {
  //     // Flaky connections might fail fetching resources
  //     if (attempts > 1) {
  //       this._getResourceDebouncer = Debouncer.debounce(this._getResourceDebouncer,
  //         timeOut.after(200), this._getResource.bind(this, rq, attempts - 1));
  //     } else {
  //       rq.onError.call(this, e);
  //     }
  //   });

  //   xhr.open('GET', rq.url);
  //   xhr.send();
  // }

  refresh() {
    if (this.categoryName) {
      // Try at most 3 times to get the items.
      // this._fetchItems(this._getCategoryObject(this.categoryName), 3);
    }
  }

}

customElements.define(ShopCategoryData.is, ShopCategoryData);