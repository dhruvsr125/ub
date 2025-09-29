import type { Metadata } from "next"
import Portfolio from "../components/website/Portfolio"

export const metadata: Metadata = {
  title: "Portfolio - Urbantech Ecom Services | Success Stories & Case Studies",
  description:
    "Explore our portfolio of successful e-commerce projects, client transformations, and proven results across Amazon, marketplace optimization, and digital marketing.",
}

export default function PortfolioPage() {
  return <Portfolio />
}
