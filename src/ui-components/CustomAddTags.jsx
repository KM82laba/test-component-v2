import React, { useState, useEffect } from 'react';
import { Button, Flex, Icon, Input, Text, View } from '@aws-amplify/ui-react';

const CustomAddTags = () => {
    const [isListVisible, setListVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
  
    const handleButtonClick = () => {
      setListVisible(!isListVisible);
    };
  
    const handleSearchChange = (e) => {
      setSearchValue(e.target.value);
    };
  
    const handleItemClick = (item) => {
      if (!selectedItems.find((selectedItem) => selectedItem.id === item.id)) {
        setSelectedItems([...selectedItems, item]);
      }
      setListVisible(false);
    };
  
    const handleItemRemove = (itemId) => {
      const updatedItems = selectedItems.filter((item) => item.id !== itemId);
      setSelectedItems(updatedItems);
    };
  
    const items = [
      { id: 1, name: 'Item 1', color: 'red' },
      { id: 2, name: 'Item 2', color: 'yellow' },
      { id: 3, name: 'Item 3cfvgbhnj', color: 'green' },
    ];
  
    // Фильтрация элементов при изменении searchValue
    useEffect(() => {
        const filtered = items.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
          && !selectedItems.some((selectedItem) => selectedItem.id === item.id) // Исключаем выбранные элементы из отображаемого списка
        );
        setFilteredItems(filtered);
      }, [searchValue, items, selectedItems]);   

  return (
    <>
    <div>
        {selectedItems.map((item) => (
          <div 
          key={item.id} 
          style={{ display: 'inline-block', backgroundColor: item.color, padding: '3px 8px', margin: '4px', borderRadius: '4px' }} 
          className='jobadd-addtags-list-item'
          >
            {item.name}
            <span style={{ marginLeft: '4px', cursor: 'pointer' }} onClick={() => handleItemRemove(item.id)}>X</span>
          </div>
        ))}
    </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Button
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          borderRadius="8px"
          padding="8px 12px 8px 12px"
          border="0"
          className='jobadd-button'
          onClick={handleButtonClick}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 8L8 8L8 14L6 14L6 8L0 8L0 6L6 6L6 0L8 0L8 6L14 6L14 8Z",
                  fill: "rgba(29,113,29,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(34,139,34,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add"
          ></Text>
        </Button>
        {isListVisible && (
          <div className='jobadd-addtags-container' >
                <Flex
                gap="8px"
                direction="row"
                width="100%"
                height="40px"
                justifyContent="flex-start"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                border="1px SOLID rgba(225,227,225,1)"
                borderRadius="10px"
                padding="7px 15px 7px 15px"
                backgroundColor="rgba(255,255,255,1)"
            >
          <Flex
            gap="8px"
            direction="row"
            height="28px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 30px 0px 8px"
            width="100%"
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
            >
              <Icon
                width="17.49px"
                height="17.49px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.489999771118164,
                  height: 17.489999771118164,
                }}
                paths={[
                  {
                    d: "M12.5 11L11.71 11L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71L11 12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",
                    fill: "rgba(116,119,117,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="13.56%"
                bottom="13.56%"
                left="13.56%"
                right="13.56%"
              ></Icon>
            </View>
            <Flex
              gap="10px"
              direction="row"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              width="100%"
            >
            <input
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search"
              className='jobadd-addtags-list-search-input'
            />
            </Flex>
          </Flex>
        
      </Flex>
            
      <div className='jobadd-addtags-list' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  style={{ cursor: 'pointer', backgroundColor: item.color, padding: '3px 8px', margin: '4px', borderRadius: '4px' }}
                  className='jobadd-addtags-list-item'
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomAddTags;
