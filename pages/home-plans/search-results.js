import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MDBDataTable, MDBContainer } from 'mdbreact';
import STYLES from '../../styles/modules/HomePlanNav.module.scss';
import { FloaterNav } from "../../components/home-plans/floaterNav";
import { getHomePlan } from "../../common/services/home-plans";

const COLUMNS = [
  {
    label: 'Design Name',
    field: 'name',
    sort: 'asc',
    width: 150
  },
  {
    label: 'Building Style',
    field: 'Style',
    sort: 'asc',
    width: 270
  },
  {
    label: 'Square Footage',
    field: 'sf',
    sort: 'asc',
    width: 270
  },
  {
    label: 'Width',
    field: 'Width',
    sort: 'asc',
    width: 270
  },
  {
    label: 'Depth',
    field: 'Depth',
    sort: 'asc',
    width: 270
  },
  {
    label: 'Bedrooms',
    field: 'Beds',
    sort: 'asc',
    width: 270
  },
  {
    label: 'Bathrooms',
    field: 'Baths',
    sort: 'asc',
    width: 270
  },
  {
    label: 'Loft',
    field: 'Loft',
    sort: 'asc',
    width: 270
  },
  {
    label: 'Garage(# cars)',
    field: 'Garage',
    sort: 'asc',
    width: 270
  }
]

const SearchResultPage = () => {

  const router = useRouter();
  const [data, setData] = useState({
    columns: [],
    rows: []
  });
  const [allHomePlans, setAllHomePlans] = useState([]);

  const onClickItem = (e) => {
    router.push({ pathname: '/home-plans/details/floor-plans', query: { plan: e.planCode } }, undefined, { scroll: false });
  }

  useEffect(() => {
    let hp = JSON.parse(sessionStorage.getItem("hp_search_result"));
    hp = hp.map(obj => ({ ...obj, clickEvent: onClickItem }));
    setData({
      columns: COLUMNS,
      rows: hp
    });
  }, []);

  useEffect(() => {
    getHomePlan('all').then((homePlans) => {
      if (homePlans) {
        setAllHomePlans(homePlans);
      }
    }).catch((err) => {

    });
  }, []);

  return (
    <section className={STYLES.searchResCont}>
      <FloaterNav homePlans={allHomePlans} />
      <MDBContainer className="py-5">
        <div className={`${STYLES.header} text-center`}>Search our Log and Timber Home Plans</div>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
          responsive
          className="my-3"
        />
      </MDBContainer>
    </section>
  );
}

export default SearchResultPage;


