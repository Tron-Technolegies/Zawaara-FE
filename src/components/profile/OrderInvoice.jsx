import React from "react";

function OrderInvoice({ order }) {
    if (!order) return null;

    const address = order.shipping_address || {};

    return (
        <div
            className="p-8 w-[800px] mx-auto"
            style={{
                fontFamily: "serif",
                backgroundColor: "#ffffff",
                color: "#000000",
            }}>
            {/* Header */}
            <div
                style={{
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "24px",
                    marginBottom: "24px",
                }}>
                <h1
                    style={{
                        fontSize: "30px",
                        fontWeight: 600,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        margin: 0,
                        color: "#000000",
                    }}>
                    Zawara
                </h1>
                <p
                    style={{
                        fontSize: "14px",
                        marginTop: "8px",
                        color: "#6b7280",
                    }}>
                    Order Invoice
                </p>
            </div>

            {/* Invoice Info */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "24px",
                    marginBottom: "32px",
                    fontSize: "14px",
                }}>
                <div>
                    <p style={labelStyle}>Order Number</p>
                    <p style={valueStyle}>{order.orderNumber}</p>
                </div>

                <div>
                    <p style={labelStyle}>Order Date</p>
                    <p style={valueStyle}>{order.orderDate}</p>
                </div>

                <div>
                    <p style={labelStyle}>Payment Method</p>
                    <p style={valueStyle}>{order.paymentMethod}</p>
                </div>

                <div>
                    <p style={labelStyle}>Order Status</p>
                    <p style={valueStyle}>{order.status}</p>
                </div>
            </div>

            {/* Shipping Address */}
            <div style={{ marginBottom: "32px" }}>
                <h2 style={sectionTitleStyle}>Shipping Address</h2>

                <div
                    style={{
                        fontSize: "14px",
                        lineHeight: "28px",
                        color: "#333333",
                    }}>
                    <p>{address.full_name}</p>
                    <p>{address.email}</p>
                    <p>{address.phone}</p>
                    <p>{address.address_line_1}</p>
                    {address.address_line_2 && <p>{address.address_line_2}</p>}
                    <p>
                        {address.city}, {address.state} {address.postal_code}
                    </p>
                    <p>{address.country}</p>
                </div>
            </div>

            {/* Products */}
            <div style={{ marginBottom: "32px" }}>
                <h2 style={sectionTitleStyle}>Order Items</h2>

                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "14px",
                    }}>
                    <thead>
                        <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                            <th style={thLeft}>Product</th>
                            <th style={thLeft}>Size</th>
                            <th style={thLeft}>Qty</th>
                            <th style={thRight}>Price</th>
                            <th style={thRight}>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {(order.products || []).map((product, index) => (
                            <tr
                                key={index}
                                style={{ borderBottom: "1px solid #e5e7eb" }}>
                                <td style={tdLeft}>{product.name}</td>
                                <td style={tdLeft}>{product.size || "-"}</td>
                                <td style={tdLeft}>{product.qty}</td>
                                <td style={tdRight}>₹ {product.price}</td>
                                <td style={tdRight}>
                                    ₹ {product.total || product.price * product.qty}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Totals */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                    style={{
                        width: "300px",
                        fontSize: "14px",
                    }}>
                    <div style={totalRow}>
                        <span>Subtotal</span>
                        <span>₹ {order.subtotal}</span>
                    </div>

                    <div style={totalRow}>
                        <span>Discount</span>
                        <span>₹ {order.discount}</span>
                    </div>

                    <div
                        style={{
                            ...totalRow,
                            borderTop: "1px solid #e5e7eb",
                            paddingTop: "12px",
                            fontSize: "16px",
                            fontWeight: 600,
                        }}>
                        <span>Total</span>
                        <span>₹ {order.totalAmount}</span>
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginTop: "48px",
                    paddingTop: "24px",
                    borderTop: "1px solid #e5e7eb",
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#6b7280",
                }}>
                Thank you for shopping with Zawaara.
            </div>
        </div>
    );
}

const labelStyle = {
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#9ca3af",
    fontSize: "11px",
    marginBottom: "4px",
};

const valueStyle = {
    marginTop: "4px",
    color: "#000000",
};

const sectionTitleStyle = {
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "12px",
    color: "#9ca3af",
    marginBottom: "12px",
};

const thLeft = {
    textAlign: "left",
    padding: "12px 0",
    color: "#000000",
};

const thRight = {
    textAlign: "right",
    padding: "12px 0",
    color: "#000000",
};

const tdLeft = {
    textAlign: "left",
    padding: "16px 0",
    color: "#000000",
};

const tdRight = {
    textAlign: "right",
    padding: "16px 0",
    color: "#000000",
};

const totalRow = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    color: "#000000",
};

export default OrderInvoice;
