import React from 'react';
import { Navbar, Nav, Dropdown, Container, Button } from 'react-bootstrap';
import { FiGlobe, FiUser, FiHeart, FiMenu } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const navItems = [
    { label: 'Chỗ ở', href: '#', active: true },
    { label: 'Vé máy bay', href: '#' },
    { label: 'Thuê xe', href: '#' },
    { label: 'Sân bay taxi', href: '#' },
    { label: 'Điểm tham quan', href: '#' },
  ];

  const accountMenuItems = [
    { label: 'Đăng nhập', href: '#', icon: FiUser },
    { label: 'Đăng ký', href: '#', icon: FiHeart },
  ];

  const helpMenuItems = [
    { label: 'Trung tâm hỗ trợ', href: '#' },
    { label: 'An toàn khi du lịch', href: '#' },
    { label: 'Chính sách hủy', href: '#' },
  ];

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  ];

  const currencies = [
    { code: 'VND', symbol: '₫', name: 'VND' },
    { code: 'USD', symbol: '$', name: 'USD' },
    { code: 'EUR', symbol: '€', name: 'EUR' },
    { code: 'GBP', symbol: '£', name: 'GBP' },
    { code: 'JPY', symbol: '¥', name: 'JPY' },
  ];

  return (
    <header className="booking-header">
      <div className="header-top-bar d-none d-lg-block">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center gap-1">
                <FiHeart size={14} /> Chương trình Genius
              </span>
              <span>|</span>
              <span>Triển lãm du lịch</span>
              <span>|</span>
              <span>Đăng ký nhận ưu đãi</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Dropdown className="header-dropdown">
                <Dropdown.Toggle
                  className="dropdown-toggle-booking d-flex align-items-center gap-1"
                  id="language-dropdown"
                >
                  <FiGlobe size={16} />
                  <span>🇻🇳 Tiếng Việt</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-booking dropdown-menu-end">
                  {languages.map((lang) => (
                    <Dropdown.Item
                      key={lang.code}
                      className="dropdown-item-booking d-flex align-items-center gap-2"
                      href="#"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <span className="text-muted">|</span>
              <Dropdown className="header-dropdown">
                <Dropdown.Toggle
                  className="dropdown-toggle-booking d-flex align-items-center gap-1"
                  id="currency-dropdown"
                >
                  <span>₫ VND</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-booking dropdown-menu-end">
                  {currencies.map((curr) => (
                    <Dropdown.Item
                      key={curr.code}
                      className="dropdown-item-booking"
                      href="#"
                    >
                      {curr.symbol} {curr.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <span className="text-muted">|</span>
              <Dropdown className="header-dropdown">
                <Dropdown.Toggle
                  className="dropdown-toggle-booking d-flex align-items-center gap-1"
                  id="account-dropdown"
                >
                  <FiUser size={16} />
                  <span>Tài khoản</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-booking dropdown-menu-end">
                  {accountMenuItems.map((item) => (
                    <Dropdown.Item
                      key={item.label}
                      className="dropdown-item-booking d-flex align-items-center gap-2"
                      href={item.href}
                    >
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </Dropdown.Item>
                  ))}
                  <Dropdown.Divider />
                  {helpMenuItems.map((item) => (
                    <Dropdown.Item
                      key={item.label}
                      className="dropdown-item-booking"
                      href={item.href}
                    >
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="outline-light" className="btn-sm ms-2 px-3">
                Đăng nhập
              </Button>
              <Button variant="primary" className="btn-sm ms-2 px-3">
                Đăng ký
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <nav className="header-main" role="navigation" aria-label="Main navigation">
        <Container fluid className="px-4 px-lg-5">
          <Navbar expand="lg" className="w-100 p-0">
            <Navbar.Brand href="#" className="booking-logo" aria-label="Booking.com - Trang chủ">
              <svg
                width="106"
                height="36"
                viewBox="0 0 106 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 36V0H106V36H0Z"
                  fill="#003580"
                />
                <path
                  d="M21.5 12.5C21.5 10.567 23.067 9 25 9H31C32.933 9 34.5 10.567 34.5 12.5V23.5C34.5 25.433 32.933 27 31 27H25C23.067 27 21.5 25.433 21.5 23.5V12.5Z"
                  fill="white"
                />
                <path
                  d="M43.5 12.5C43.5 10.567 45.067 9 47 9H53C54.933 9 56.5 10.567 56.5 12.5V23.5C56.5 25.433 54.933 27 53 27H47C45.067 27 43.5 25.433 43.5 23.5V12.5Z"
                  fill="white"
                />
                <path
                  d="M65.5 12.5C65.5 10.567 67.067 9 69 9H75C76.933 9 78.5 10.567 78.5 12.5V23.5C78.5 25.433 76.933 27 75 27H69C67.067 27 65.5 25.433 65.5 23.5V12.5Z"
                  fill="white"
                />
                <path
                  d="M87.5 12.5C87.5 10.567 89.067 9 91 9H97C98.933 9 100.5 10.567 100.5 12.5V23.5C100.5 25.433 98.933 27 97 27H91C89.067 27 87.5 25.433 87.5 23.5V12.5Z"
                  fill="white"
                />
              </svg>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="booking-navbar"
              className="booking-navbar-toggler"
            >
              <FiMenu size={24} color="#003580" />
            </Navbar.Toggle>

            <Navbar.Collapse id="booking-navbar" className="justify-content-between">
              <Nav className="booking-nav me-auto mb-2 mb-lg-0" role="menubar">
                {navItems.map((item) => (
                  <Nav.Item key={item.label} role="none">
                    <Nav.Link
                      href={item.href}
                      className={`nav-link-booking ${item.active ? 'active' : ''}`}
                      role="menuitem"
                    >
                      {item.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <div className="d-flex align-items-center gap-2 booking-header-actions">
                <Dropdown className="header-dropdown">
                  <Dropdown.Toggle
                    className="dropdown-toggle-booking d-flex align-items-center gap-1"
                    id="mobile-language-dropdown"
                  >
                    <FiGlobe size={16} />
                    <span>🇻🇳 Tiếng Việt</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-booking dropdown-menu-end">
                    {languages.map((lang) => (
                      <Dropdown.Item
                        key={lang.code}
                        className="dropdown-item-booking d-flex align-items-center gap-2"
                        href="#"
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="header-dropdown">
                  <Dropdown.Toggle
                    className="dropdown-toggle-booking d-flex align-items-center gap-1"
                    id="mobile-currency-dropdown"
                  >
                    <span>₫ VND</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-booking dropdown-menu-end">
                    {currencies.map((curr) => (
                      <Dropdown.Item
                        key={curr.code}
                        className="dropdown-item-booking"
                        href="#"
                      >
                        {curr.symbol} {curr.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                <Button variant="outline-primary" className="btn-booking-secondary d-none d-md-inline-flex">
                  <FiUser size={16} className="me-1" />
                  Đăng nhập
                </Button>
                <Button variant="primary" className="btn-booking-primary">
                  <FiHeart size={16} className="me-1" />
                  Đăng ký
                </Button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </nav>
    </header>
  );
};

export default Header;