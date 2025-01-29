import React from "react";

const AllPages = () => {
  return (
    <section>
      <div className="container p-4 mt-5">
        <h3 className="fw-bolder mb-3">
          At a glance, you can see all the links of your website:
        </h3>
        <ul className="m-auto list-unstyled">
          {/* Home Layout */}
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/"
              target="_blank"
            >
              Home Page
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/blog-list"
              target="_blank"
            >
              Blog List
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/blog-content"
              target="_blank"
            >
              Blog Content
            </a>
          </li>

          {/* Auth Layout */}
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/auth/sign-in"
              target="_blank"
            >
              Sign In
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/auth/enter-OTP"
              target="_blank"
            >
              Enter OTP
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/auth/forgot-password"
              target="_blank"
            >
              Forgot Password
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/auth/create-new-password"
              target="_blank"
            >
              Create New Password
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/auth/reset-otp"
              target="_blank"
            >
              Reset OTP
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/auth/on-boarding"
              target="_blank"
            >
              Onboarding
            </a>
          </li>

          {/* User/Private Layout */}
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/match"
              target="_blank"
            >
              Match
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/find-your-soul"
              target="_blank"
            >
              Find Your Soul
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/chat"
              target="_blank"
            >
              Chat
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/tutorial"
              target="_blank"
            >
              Tutorial
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/profile"
              target="_blank"
            >
              Profile
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/premium"
              target="_blank"
            >
              Premium
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/lime-light-price"
              target="_blank"
            >
              Lime Light Price
            </a>
          </li>
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/user/reward"
              target="_blank"
            >
              Reward
            </a>
          </li>

          {/* All Pages */}
          <li className="bi bi-caret-right-fill">
            <a
              className="py-1 px-2 d-inline-block text-decoration-none fs-5 text-dark fw-bold"
              href="/all-pages"
              target="_blank"
            >
              All Pages
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AllPages;
