import _ from 'lodash';

export function paginate_mosh(items = [], pageNumber = 0, pageSize = 0) {

    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex)
        .take(pageSize)
        .value();
}



export function paginate(items, pageNumber, pageSize) {

    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
}
