import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FiSearch, FiCalendar, FiUsers, FiMapPin, FiChevronDown } from 'react-icons/fi';
import './SearchForm.css';

const SearchForm = () => {
  const tabs = [
    { id: 'accommodation', label: 'Chỗ ở', icon: FiMapPin, active: true },
    { id: 'flights', label: 'Vé máy bay', icon: FiCalendar },
    { id: 'flight-hotel', label: 'Vé máy bay + Khách sạn', icon: FiUsers },
    { id: 'attractions', label: 'Điểm tham quan', icon: FiSearch },
    { id: 'car-rental', label: 'Thuê xe', icon: FiSearch },
    { id: 'airport-taxi', label: 'Sân bay taxi', icon: FiSearch },
  ];

  return (
    <section className="search-section" aria-labelledby="search-heading">
      <Container fluid className="px-4 px-lg-5">
        <div className="search-form-container" role="search">
          <div className="search-tabs d-flex gap-1 mb-3 flex-wrap" role="tablist" aria-label="Loại tìm kiếm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`search-tab-btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill ${tab.active ? 'active' : ''}`}
                role="tab"
                aria-selected={tab.active}
                aria-controls={`${tab.id}-panel`}
                id={`${tab.id}-tab`}
              >
                <tab.icon size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <Form className="search-form">
            <Row className="g-3 align-items-end">
              <Col xs={12} md={4} lg={3} className="search-field-col">
                <label htmlFor="destination" className="search-field-label">
                  Đi đâu?
                </label>
                <div className="search-input-wrapper">
                  <Form.Control
                    type="text"
                    id="destination"
                    className="search-input"
                    placeholder="Địa điểm, khách sạn, địa danh..."
                    aria-describedby="destination-help"
                  />
                  <FiMapPin className="search-icon" size={20} />
                </div>
              </Col>

              <Col xs={12} md={4} lg={2} className="search-field-col">
                <label htmlFor="checkin" className="search-field-label">
                  Nhận phòng
                </label>
                <div className="search-input-wrapper date-field">
                  <Form.Control
                    type="text"
                    id="checkin"
                    className="search-input date-display"
                    value="Thứ 2, 15/10/2026"
                    readOnly
                    aria-describedby="checkin-help"
                  />
                  <FiCalendar className="search-icon" size={20} />
                </div>
              </Col>

              <Col xs={12} md={4} lg={2} className="search-field-col">
                <label htmlFor="checkout" className="search-field-label">
                  Trả phòng
                </label>
                <div className="search-input-wrapper date-field">
                  <Form.Control
                    type="text"
                    id="checkout"
                    className="search-input date-display"
                    value="Thứ 3, 16/10/2026"
                    readOnly
                    aria-describedby="checkout-help"
                  />
                  <FiCalendar className="search-icon" size={20} />
                </div>
              </Col>

              <Col xs={12} md={6} lg={2} className="search-field-col">
                <label htmlFor="guests" className="search-field-label">
                  Khách & Phòng
                </label>
                <div className="search-input-wrapper">
                  <button
                    type="button"
                    id="guests"
                    className="guest-selector d-flex align-items-center justify-content-between"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                  >
                    <span>2 khách, 1 phòng</span>
                    <FiChevronDown size={18} color="#5f5f5f" />
                  </button>
                  <FiUsers className="search-icon" size={20} />
                </div>
              </Col>

              <Col xs={12} className="search-submit-col">
                <Button
                  type="submit"
                  className="btn-booking-primary btn-search w-100"
                  aria-label="Tìm kiếm chỗ ở"
                >
                  <FiSearch size={20} className="me-2" />
                  Tìm kiếm
                </Button>
              </Col>
            </Row>

            <div className="search-hints mt-3 d-flex flex-wrap gap-3 text-muted small">
              <span className="d-flex align-items-center gap-1">
                <FiMapPin size={14} />
                Thử: "Hà Nội", "Phú Quốc", "Đà Nẵng"
              </span>
              <span className="d-flex align-items-center gap-1">
                <FiCalendar size={14} />
                Linh hoạt? Chọn "Chưa quyết định ngày"
              </span>
              <span className="d-flex align-items-center gap-1">
                <FiUsers size={14} />
                Thêm trẻ em, phòng riêng biệt
              </span>
            </div>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default SearchForm;