from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow React to call this API

# ---------------------------
# Dashboard Summary API
# ---------------------------
@app.route("/api/dashboard/summary", methods=["GET"])
def dashboard_summary():
    return jsonify({
        "total_orders": 124,
        "total_profit_loss": 1540,
        "account_balance": 52000,
        "broker_status": "Connected"
    })


# ---------------------------
# Live Positions API
# ---------------------------
@app.route("/api/dashboard/live-positions", methods=["GET"])
def live_positions():
    return jsonify([
        {
            "broker": "Zerodha",
            "strategy": "EMA Crossover",
            "symbol": "NIFTY",
            "quantity": 50,
            "buy_price": 22150,
            "sell_price": 22320,
            "unrealized_pnl": 850,
            "realized_pnl": 0
        },
        {
            "broker": "Angel One",
            "strategy": "Breakout",
            "symbol": "BANKNIFTY",
            "quantity": 25,
            "buy_price": 48200,
            "sell_price": 48050,
            "unrealized_pnl": -375,
            "realized_pnl": 0
        }
    ])


# ---------------------------
# Brokers API
# ---------------------------
@app.route("/api/brokers", methods=["GET"])
def brokers():
    return jsonify([
        {
            "name": "Zerodha",
            "status": "Connected",
            "last_token_generated": "09:00 AM"
        },
        {
            "name": "Angel One",
            "status": "Disconnected",
            "last_token_generated": "—"
        }
    ])


# ---------------------------
# Strategies API
# ---------------------------
@app.route("/api/strategies", methods=["GET"])
def strategies():
    return jsonify([
        {
            "name": "EMA Crossover",
            "risk": "Medium",
            "active": True
        },
        {
            "name": "ORB Strategy",
            "risk": "High",
            "active": False
        }
    ])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
