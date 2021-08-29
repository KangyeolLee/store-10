import React from 'react';
import ProductDelivery from '@/components/ProductDetails/ProductDelivery';
import ProductDescription from '@/components/ProductDetails/ProductDescription';
import { TabWrapper, Tabs, TabPanel, Tab } from './TabUI';
import ProductExchange from '@/components/ProductDetails/ProductExchange.tsx/ProductExchange';
import ProductReview from '@/components/ProductDetails/ProductReview';
import ProductRequest from '@/components/ProductDetails/ProductRequest';

const ProductDetailTab = () => {
  return (
    <TabWrapper>
      <Tabs sticky>
        <Tab label="상세정보" index={0} />
        <Tab label="안내사항" index={1} />
        <Tab label="상품후기" index={2} />
        <Tab label="상품문의" index={3} />
      </Tabs>
      <TabPanel index={0}>
        <ProductDescription />
      </TabPanel>
      <TabPanel index={1}>
        <ProductDelivery />
        <ProductExchange />
      </TabPanel>
      <TabPanel index={2}>
        <ProductReview />
      </TabPanel>
      <TabPanel index={3}>
        <ProductRequest />
      </TabPanel>
    </TabWrapper>
  );
};

export default ProductDetailTab;
