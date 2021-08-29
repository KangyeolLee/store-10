// 부모 자식간 오브젝트 조합
/* return
 * [
 *    {
 *      ...parent
 *      children : [
 *        ...children //parent를 참조하고 있는 키가 빠진
 *      ]
 *    }
 * ]
 */
const combineObjectArray = <TParent, TChildren>({
  parentObjectArr,
  parentKey,
  childrenObjectArr,
  childrenKey,
  childrenName = 'children',
  parentRemoveColumns,
  childrenRemoveColumns
}: {
  parentObjectArr: TParent[];
  parentKey: string;
  childrenObjectArr: TChildren[];
  childrenKey: string;
  childrenName?: string;
  parentRemoveColumns?: string[];
  childrenRemoveColumns?: string[];
}) => {
  const returnData = parentObjectArr.reduce((all, parentObject) => {
    if(parentRemoveColumns){
      parentRemoveColumns.forEach((column) => {
        delete parentObject[column]
      })
    }

    all[parentObject[parentKey]] = {
      ...parentObject,
    };
    all[parentObject[parentKey]][childrenName] = [];
    return all;
  }, {});

  for (const children of childrenObjectArr) {
    const appendData = Object.assign({}, children);
    delete appendData[childrenKey];
    if(childrenRemoveColumns){
      childrenRemoveColumns.forEach((column) => {
        delete appendData[column]
      })
    }

    returnData[children[childrenKey]][childrenName].push({
      ...appendData,
    });
  }

  return Object.values(returnData);
};

export default combineObjectArray;
