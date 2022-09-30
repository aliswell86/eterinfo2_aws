import React, {Component} from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ItemFilterContainer from 'containers/items/ItemFilterContainer';
import ItemListContainer from 'containers/items/ItemListContainer';

import { Helmet, HelmetProvider } from "react-helmet-async";


class ItemsPage extends Component {
  render() {
    return (
      <PageTemplate>
        <HelmetProvider>
          <Helmet>
            <title>이터널시티 무기정보</title>
            <meta name="description" content="착용부위별 등급별 이터널시티 무기 아이템정보. 불법무기 CL무기 목록조회" />
          </Helmet>
        </HelmetProvider>
        <ItemFilterContainer/>
        <ItemListContainer/>
      </PageTemplate>
    );
  }
};

export default ItemsPage;