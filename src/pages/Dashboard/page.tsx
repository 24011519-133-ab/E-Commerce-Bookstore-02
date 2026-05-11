const Dashboard = () => (
  <div className="dash-layout">
    <div className="dash-sidebar">
      <div className="dash-profile">
        <div className="dash-avatar">AD</div>
        <p>Admin Portal</p>
      </div>
      <nav>
        <a href="/dashboard">📊 Overview</a>
        <a href="/dashboard">📦 Inventory</a>
        <a href="/dashboard">📈 Sales Reports</a>
        <a href="/dashboard">👥 Users</a>
        <a href="/dashboard">⚙️ Settings</a>
        <a href="/dashboard">📁 Export Data</a>
      </nav>
    </div>

    <div className="dash-main">
      <div className="dash-header">
        <h2>Stock Management</h2>
        <div className="header-stats">
          <div className="header-stat">
            <strong>1,240</strong>
            <span>Total Items</span>
          </div>
          <div className="header-stat">
            <strong>42</strong>
            <span>Pending Orders</span>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <div className="action-btn">
          <div className="action-icon">📋</div>
          <h4>View All Stock</h4>
          <button className="btn" type="button">View</button>
        </div>
        <div className="action-btn">
          <div className="action-icon">🗑️</div>
          <h4>Delete Stock</h4>
          <button className="btn" type="button">Remove</button>
        </div>
        <div className="action-btn">
          <div className="action-icon">🔄</div>
          <h4>Update Stock</h4>
          <button className="btn" type="button">Edit</button>
        </div>
        <div className="action-btn">
          <div className="action-icon">➕</div>
          <h4>New Stock</h4>
          <button className="btn" type="button">Add</button>
        </div>
      </div>

      <div className="orders-section">
        <h3>🆕 Unseen Orders</h3>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Book</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-001</td>
              <td>john@email.com</td>
              <td>1984</td>
              <td>$12.99</td>
              <td><span className="status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>#ORD-002</td>
              <td>jane@email.com</td>
              <td>The Alchemist</td>
              <td>$14.99</td>
              <td><span className="status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>#ORD-003</td>
              <td>mike@email.com</td>
              <td>Mockingbird</td>
              <td>$11.99</td>
              <td><span className="status-pending">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="dash-chart">
        <h3>Monthly Inventory Growth - 2026</h3>
        <div className="chart-bars">
          <div className="chart-bar">
            <div className="bar"></div>
            <div className="bar-label">30</div>
            <div className="bar-price">Jan</div>
          </div>
          <div className="chart-bar">
            <div className="bar"></div>
            <div className="bar-label">55</div>
            <div className="bar-price">Feb</div>
          </div>
          <div className="chart-bar">
            <div className="bar"></div>
            <div className="bar-label">45</div>
            <div className="bar-price">Mar</div>
          </div>
          <div className="chart-bar">
            <div className="bar"></div>
            <div className="bar-label">85</div>
            <div className="bar-price">Apr</div>
          </div>
          <div className="chart-bar">
            <div className="bar"></div>
            <div className="bar-label">70</div>
            <div className="bar-price">May</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
