package com.ffwatl.admin.order.dao;


import com.ffwatl.admin.order.domain.FulfillmentOption;
import com.ffwatl.admin.order.domain.FulfillmentOptionImpl;
import com.ffwatl.admin.order.service.FulfillmentType;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class FulfillmentOptionDaoImpl implements FulfillmentOptionDao{

    @PersistenceContext
    private EntityManager em;


    @Override
    public FulfillmentOption findFulfillmentOptionById(long id) {
        return em.find(FulfillmentOptionImpl.class, id);
    }

    @Override
    public FulfillmentOption save(FulfillmentOption option) {
        return em.merge(option);
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<FulfillmentOption> findAllFulfillmentOptions() {
        /*TypedQuery<FulfillmentOption> query = em.createNamedQuery("find_all_fulfillment_options", FulfillmentOption.class);
        query.getResultList();*/
        return em.createNamedQuery("find_all_fulfillment_options").getResultList();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<FulfillmentOption> findAllFulfillmentOptionsByFulfillmentType(FulfillmentType type) {
        return em.createNamedQuery("find_all_fulfillment_options_by_type")
                .setParameter("fulfillmentType", type)
                .getResultList();
    }
}