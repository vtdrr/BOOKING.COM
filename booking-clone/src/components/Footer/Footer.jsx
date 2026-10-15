import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiGlobe,
  FiShield,
  FiHeart,
  FiTruck,
  FiAward,
  FiChevronDown,
} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const footerColumns = [
    {
      title: 'Hỗ trợ',
      links: [
        { label: 'Trung tâm hỗ trợ', href: '#' },
        { label: 'An toàn khi du lịch', href: '#' },
        { label: 'Thay đổi đặt chỗ', href: '#' },
        { label: 'Hủy đặt chỗ', href: '#' },
        { label: 'Chính sách hoàn tiền', href: '#' },
        { label: 'Khiếu nại', href: '#' },
      ],
    },
    {
      title: 'Về Booking.com',
      links: [
        { label: 'Về chúng tôi', href: '#' },
        { label: 'Báo chí', href: '#' },
        { label: 'Tuyển dụng', href: '#' },
        { label: 'Đối tác', href: '#' },
        { label: 'Bền vững', href: '#' },
        { label: 'Quy định truy cập', href: '#' },
      ],
    },
    {
      title: 'Đặt chỗ của bạn',
      links: [
        { label: 'Chỗ ở', href: '#' },
        { label: 'Vé máy bay', href: '#' },
        { label: 'Thuê xe', href: '#' },
        { label: 'Sân bay taxi', href: '#' },
        { label: 'Điểm tham quan', href: '#' },
        { label: 'Xem tất cả', href: '#' },
      ],
    },
    {
      title: 'Đối tác',
      links: [
        { label: 'Đăng ký chỗ ở', href: '#' },
        { label: 'Quản lý đặt chỗ', href: '#' },
        { label: 'Chương trình Genius', href: '#' },
        { label: 'Chương trình giới thiệu', href: '#' },
        { label: 'Booking.com for Business', href: '#' },
      ],
    },
    {
      title: 'Ứng dụng di động',
      links: [
        { label: 'Tải ứng dụng iOS', href: '#' },
        { label: 'Tải ứng dụng Android', href: '#' },
        { label: 'Đặt chỗ qua ứng dụng', href: '#' },
      ],
      badges: [
        { label: 'App Store', href: '#', icon: FiAward },
        { label: 'Google Play', href: '#', icon: FiAward },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: FiTwitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: FiInstagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: FiYoutube, href: '#', label: 'YouTube', color: '#FF0000' },
  ];

  const bottomLinks = [
    { label: 'Chính sách quyền riêng tư', href: '#' },
    { label: 'Điều khoản sử dụng', href: '#' },
    { label: 'Cài đặt cookie', href: '#' },
    { label: 'Sơ đồ trang web', href: '#' },
    { label: 'Chính sách bảo mật', href: '#' },
  ];

  const features = [
    { icon: FiShield, title: 'Đặt chỗ an toàn', desc: 'Thông tin thanh toán được bảo vệ' },
    { icon: FiHeart, title: 'Không phí đặt chỗ', desc: 'Không có chi phí ẩn' },
    { icon: FiTruck, title: 'Hủy miễn phí', desc: 'Trên hầu hết các chỗ ở' },
    { icon: FiAward, title: 'Cam kết giá tốt nhất', desc: 'Hoàn chênh lệch nếu tìm thấy giá rẻ hơn' },
  ];

  return (
    <footer className="footer-section" role="contentinfo">
      <Container fluid className="px-4 px-lg-5">
        <div className="footer-features mb-5 p-4 rounded-3" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={feature.title} xs={12} md={6} lg={3}>
                <div className="footer-feature d-flex gap-3">
                  <div className="footer-feature-icon d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: 48, height: 48, borderRadius: '12px', backgroundColor: 'rgba(0, 53, 128, 0.2)' }}>
                    <feature.icon size={22} color="#003580" />
                  </div>
                  <div>
                    <div className="footer-feature-title fw-semibold">{feature.title}</div>
                    <div className="footer-feature-desc small" style={{ color: 'rgba(255,255,255,0.7)' }}>{feature.desc}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <Row className="footer-main g-4 mb-5">
          {footerColumns.map((column, index) => (
            <Col key={column.title} xs={12} sm={6} lg={3} className="footer-col">
              <h4 className="footer-heading">{column.title}</h4>
              <div className="footer-links">
                {column.links.map((link) => (
                  <a key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
              {column.badges && (
                <div className="footer-badges d-flex gap-2 mt-3 flex-wrap">
                  {column.badges.map((badge) => (
                    <a key={badge.label} href={badge.href} className="footer-badge d-flex align-items-center gap-1 px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <badge.icon size={14} />
                      <span className="small">{badge.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </Col>
          ))}
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-social mb-4 align-items-center">
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center gap-3 flex-wrap">
              <span className="footer-heading mb-0 me-2">Theo dõi chúng tôi:</span>
              <div className="d-flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-icon"
                    aria-label={social.label}
                    style={{ backgroundColor: social.color }}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="d-flex align-items-center gap-3 flex-wrap justify-content-md-end">
              <DropdownLanguage />
              <DropdownCurrency />
            </div>
          </Col>
        </Row>

        <Row className="footer-legal">
          <Col xs={12} md={8} className="mb-3 mb-md-0">
            <div className="d-flex flex-wrap gap-3 footer-bottom-links">
              {bottomLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-bottom-link">
                  {link.label}
                </a>
              ))}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="footer-copyright text-md-end">
              © 2026 Booking.com. Tất cả quyền được bảo lưu.
            </div>
          </Col>
        </Row>

        <div className="footer-disclaimer mt-4">
          <p className="footer-bottom small">
            Booking.com là một phần của Booking Holdings Inc., tập đoàn du lịch trực tuyến lớn nhất thế giới.
          </p>
        </div>
      </Container>
    </footer>
  );
};

const DropdownLanguage = () => (
  <div className="footer-dropdown">
    <button className="footer-dropdown-toggle d-flex align-items-center gap-2" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px' }}>
      <FiGlobe size={16} />
      <span>🇻🇳 Tiếng Việt</span>
      <FiChevronDown size={12} />
    </button>
  </div>
);

const DropdownCurrency = () => (
  <div className="footer-dropdown">
    <button className="footer-dropdown-toggle d-flex align-items-center gap-2" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px' }}>
      <span>₫ VND</span>
      <FiChevronDown size={12} />
    </button>
  </div>
);

export default Footer;