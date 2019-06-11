export function getDocumentByCategory(searchResult) {
    return searchResult.value.reduce((contentByCategory, item) => {
        if (!contentByCategory[item.category]) {
            contentByCategory[item.category] = [ item ];
            return contentByCategory;
        }
        contentByCategory[item.category].push(item);
        return contentByCategory;
    }, {});
}

export function onlyUnique(item, index, self) {
    const indexFound = self.findIndex(element => element.url === item.url);
    return index === indexFound;
}
