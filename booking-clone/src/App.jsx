import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Footer from './components/Footer/Footer';
import {
  FiChevronRight,
  FiShield,
  FiHeart,
  FiTruck,
  FiAward,
  FiGlobe,
  FiUsers,
  FiSmartphone,
  FiCamera,
} from 'react-icons/fi';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main role="main">
        <SearchForm />
        
        <section className="hero-section" aria-label="Hero">
          <Container fluid className="px-4 px-lg-5">
            <div className="hero-content">
              <h1 className="hero-title">Khám phá nơi ở hoàn hảo cho chuyến đi của bạn</h1>
              <p className="hero-subtitle">
                Từ khách sạn sang trọng đến homestay温馨, Booking.com giúp bạn tìm thấy chỗ nghỉ lý tưởng với giá tốt nhất. Đặt ngay hôm nay!
              </p>
            </div>
          </Container>
        </section>

        <section className="popular-destinations py-5" aria-label="Địa điểm phổ biến">
          <Container fluid className="px-4 px-lg-5">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
              <h2 className="h3 fw-bold mb-0">Địa điểm phổ biến tại Việt Nam</h2>
              <a href="#" className="btn btn-booking-secondary">Xem tất cả <FiChevronRight size={16} className="ms-1" /></a>
            </div>
            <Row className="g-3 destinations-grid">
              {[
                { name: 'Hà Nội', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271758013.jpg?k=203f8e8b8f5b8c5e8f5b8c5e8f5b8c5e', count: '1,200+ chỗ ở' },
                { name: 'Hồ Chí Minh', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271758014.jpg?k=203f8e8b8f5b8c5e8f5b8c5e8f5b8c5e', count: '1,500+ chỗ ở' },
                { name: 'Đà Nẵng', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271758015.jpg?k=203f8e8b8f5b8c5e8f5b8c5e8f5b8c5e', count: '800+ chỗ ở' },
                { name: 'Phú Quốc', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271758016.jpg?k=203f8e8b8f5b8c5e8f5b8c5e8f5b8c5e', count: '600+ chỗ ở' },
                { name: 'Nha Trang', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271758017.jpg?k=203f8e8b8f5b8c5e8f5b8c5e8f5b8c5e', count: '700+ chỗ ở' },
                { name: 'Hội An', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/271758018.jpg?k=203f8e8b8f5b8c5e8f5b8c5e8f5b8c5e', count: '400+ chỗ ở' },
              ].map((dest, index) => (
                <Col key={dest.name} xs={12} sm={6} lg={4} xl={2}>
                  <article className="destination-card h-100">
                    <div className="destination-image-wrapper">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="destination-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="destination-info p-3">
                      <h3 className="destination-name fw-semibold mb-1">{dest.name}</h3>
                      <p className="destination-count text-muted small mb-0">{dest.count}</p>
                    </div>
                  </article>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="why-booking py-5 bg-light" aria-label="Tại sao chọn Booking.com">
          <Container fluid className="px-4 px-lg-5">
            <div className="text-center mb-5">
              <h2 className="h2 fw-bold">Tại sao chọn Booking.com?</h2>
              <p className="text-muted mt-2">Hơn 28 triệu chỗ ở trên toàn cầu, giá tốt nhất được bảo đảm</p>
            </div>
            <Row className="g-4">
              {[
                { icon: FiShield, title: 'Đặt chỗ an toàn', desc: 'Thông tin cá nhân và thanh toán được bảo vệ bằng mã hóa SSL' },
                { icon: FiHeart, title: 'Không phí đặt chỗ', desc: 'Không bao giờ tính phí ẩn khi bạn đặt chỗ qua Booking.com' },
                { icon: FiTruck, title: 'Hủy miễn phí', desc: 'Hầu hết chỗ ở cho phép hủy miễn phí, linh hoạt cho kế hoạch' },
                { icon: FiAward, title: 'Cam kết giá tốt nhất', desc: 'Tìm thấy giá rẻ hơn? Chúng tôi hoàn chênh lệch cho bạn' },
                { icon: FiGlobe, title: 'Hỗ trợ 24/7', desc: 'Đội ngũ hỗ trợ khách hàng sẵn sàng giúp đỡ mọi lúc, mọi nơi' },
                { icon: FiUsers, title: 'Đánh giá thật', desc: 'Hơn 150 triệu đánh giá từ khách đã ở thực tế' },
              ].map((item, index) => (
                <Col key={index} xs={12} md={6} lg={4}>
                  <div className="benefit-card h-100 p-4 text-center">
                    <div className="benefit-icon mb-3" style={{ width: 64, height: 64, borderRadius: '16px', backgroundColor: 'var(--booking-blue-light)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                      <item.icon size={28} color="var(--booking-blue)" />
                    </div>
                    <h3 className="benefit-title h5 fw-semibold mb-2">{item.title}</h3>
                    <p className="benefit-desc text-muted small">{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="app-promo py-5" aria-label="Tải ứng dụng">
          <Container fluid className="px-4 px-lg-5">
            <div className="app-promo-card p-4 p-lg-5 rounded-3 text-center text-white" style={{ background: 'linear-gradient(135deg, #003580 0%, #0052cc 100%)' }}>
              <div className="mx-auto" style={{ maxWidth: 500 }}>
                <h2 className="h2 fw-bold mb-3">Giảm 10% trở lên khi đặt qua ứng dụng</h2>
                <p className="lead mb-4 opacity-90">Tải ứng dụng Booking.com ngay hôm nay để nhận ưu đãi độc quyền, quản lý đặt chỗ dễ dàng và nhận thông báo real-time.</p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <a href="#" className="btn btn-light btn-lg px-4" style={{ minWidth: 180 }}>
                    <FiSmartphone size={20} className="me-2" />
                    Tải ứng dụng
                  </a>
                  <a href="#" className="btn btn-outline-light btn-lg px-4" style={{ minWidth: 180 }}>
                    <FiCamera size={20} className="me-2" />
                    Quét mã QR
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;