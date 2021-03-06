package com.ffwatl.admin.payment.domain.secure;


import com.ffwatl.admin.order.domain.Order;
import com.ffwatl.admin.payment.PaymentType;
import com.ffwatl.admin.payment.domain.OrderPayment;
import com.ffwatl.admin.payment.service.SecureOrderPaymentService;
import com.ffwatl.common.encryption.EncryptionModule;

public interface Referenced {

    long getId();

    void setId(long id);

    /**
     * <p>The indirect link between non-secure data and the secure data represented here. Since implementing entities
     * should be in a separate persistence unit (blSecurePU), this is the only avenue to show a relationship between the two.</p>
     *
     * <p>From the {@link Order} side of the domain, this is linked by {@link OrderPayment#getReferenceNumber()} on the
     * {@link OrderPayment} entity.</p>
     *
     * @see {@link OrderPayment#getReferenceNumber()}
     */
    String getReferenceNumber();

    /**
     * Set the link between this secure entity and the {@link OrderPayment}. This should not be null as this is required
     * @param referenceNumber
     */
    void setReferenceNumber(String referenceNumber);

    /**
     * @return the {@link EncryptionModule} used to encrypt and decrypt this secure information back and forth
     */
    EncryptionModule getEncryptionModule();

    /**
     * Sets the encryption module used by to encrypt and decrypt the data saved in the blSecurePU persistence unit. This
     * normally corresponds to the EncryptionModule Spring bean which should be automatically set after invoking
     * {@link SecureOrderPaymentService#findSecurePaymentInfo(String, PaymentType)}
     * and {@link SecureOrderPaymentService#create(PaymentType)}.
     *
     * @see {@link SecureOrderPaymentService#findSecurePaymentInfo(String, PaymentType)}
     * @see {@link SecureOrderPaymentService#create(PaymentType)}
     */
    void setEncryptionModule(EncryptionModule encryptionModule);

}