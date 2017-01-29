package com.ffwatl.admin.order.dao;

import com.ffwatl.admin.order.domain.FulfillmentGroup;
import com.ffwatl.admin.order.domain.FulfillmentGroupImpl;
import com.ffwatl.admin.order.domain.Order;
import com.ffwatl.admin.order.service.FulfillmentGroupStatusType;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class FulfillmentGroupDaoImpl implements FulfillmentGroupDao{

    @PersistenceContext
    private EntityManager em;


    @Override
    public FulfillmentGroup findFulfillmentGroupById(long id) {
        return em.createQuery("SELECT f FROM FulfillmentGroupImpl f " +
                "LEFT JOIN FETCH f.candidateFulfillmentGroupOffers " +
                "LEFT JOIN FETCH f.fulfillmentGroupAdjustments " +
                "LEFT JOIN FETCH f.order.orderItems oo " +
                "LEFT JOIN FETCH oo.orderItemPriceDetails " +
                "LEFT JOIN FETCH oo.candidateItemOffers " +
                "LEFT JOIN FETCH oo.orderItemQualifiers " +
                "WHERE f.id=:id", FulfillmentGroupImpl.class)
                .setParameter("id", id)
                .getSingleResult();
    }

    @Override
    public FulfillmentGroup save(FulfillmentGroup fulfillmentGroup) {
        return em.merge(fulfillmentGroup);
    }

    @Override
    public FulfillmentGroup findDefaultFulfillmentGroupForOrder(Order order) {
        if(order == null) throw new IllegalArgumentException("Order can't be null!");

        return em.createQuery("SELECT f FROM FulfillmentGroupImpl f " +
                "LEFT JOIN FETCH f.candidateFulfillmentGroupOffers " +
                "LEFT JOIN FETCH f.fulfillmentGroupAdjustments " +
                "LEFT JOIN FETCH f.order.orderItems oo " +
                "LEFT JOIN FETCH oo.orderItemPriceDetails " +
                "LEFT JOIN FETCH oo.candidateItemOffers " +
                "LEFT JOIN FETCH oo.orderItemQualifiers " +
                "WHERE f.order.orderNumber=:orderNumber", FulfillmentGroupImpl.class)
                .setParameter("orderNumber", order.getOrderNumber())
                .getSingleResult();
    }

    @Override
    public void delete(FulfillmentGroup fulfillmentGroup) {
        em.remove(fulfillmentGroup);
    }

    @Override
    public FulfillmentGroup createDefault() {
        return null;
    }

    @Override
    public FulfillmentGroup create() {
        return null;
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<FulfillmentGroup> findUnfulfilledFulfillmentGroups(int start, int maxResults) {
        return em.createNamedQuery("find_unfulfilled_fulfillment_group_asc")
                .setFirstResult(start)
                .setMaxResults(maxResults)
                .getResultList();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<FulfillmentGroup> findUnprocessedFulfillmentGroups(int start, int maxResults) {
        return em.createNamedQuery("find_unprocessed_fulfillment_group_asc")
                .setFirstResult(start)
                .setMaxResults(maxResults)
                .getResultList();
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<FulfillmentGroup> findFulfillmentGroupsByStatus(FulfillmentGroupStatusType status,
                                                                int start, int maxResults, boolean ascending) {
        if(status == null) throw new IllegalArgumentException("FulfillmentGroupStatusType can't be null");
        //FIXME: add handling ascending value
        return em.createNamedQuery("find_fulfillment_groups_by_status_asc")
                .setParameter("status", status.getType())
                .setFirstResult(start)
                .setMaxResults(maxResults)
                .getResultList();
    }

    @Override
    public List<FulfillmentGroup> findFulfillmentGroupsByStatus(FulfillmentGroupStatusType status, int start, int maxResults) {
        return findFulfillmentGroupsByStatus(status, start, maxResults, true);
    }

}