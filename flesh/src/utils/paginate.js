import _ from 'lodash';

export function paginate_mosh(items = [], pageNumber = 0, pageSize = 0) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex)
        .take(pageSize)
        .value();
}

/** function splits an item array into sub arrays
 * [1,2,3,4,5,6,7,8,9] should retun somethign like p(item,3,3)
 * [[1,2,3], [4,5,6], [7,8,9]]
  */
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
}
