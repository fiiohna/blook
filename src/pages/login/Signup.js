export default function Signup() {
    return (
        <div className="signup">
            <h3>Sign Up</h3>
            <form>
                <label>
                    <span>Username </span>
                    <input type="text" name="username" required />
                </label>
                <label>
                    <span>Address </span>
                    <input type="text" name="address" required />
                </label>
                <label>
                    <span>Billing Address </span>
                    <input type="text" name="billing-address" required />
                </label>
                <label>
                    <span>Email </span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Phone Number </span>
                    <input type="number" name="number" required />
                </label>
                <label>
                    <span>Password </span>
                    <input type="password" name="password" required />
                </label>
                <label>
                    <span>Confirm Password </span>
                    <input type="password" name="password2" required />
                </label>
                <button>Sign up</button>
            </form>
        </div>
    );
}