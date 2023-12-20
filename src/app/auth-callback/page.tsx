import { useRouter, useSearchParams } from "next/navigation";

const page = async () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const apiResponse = await fetch("/api/stng");

  const data = await apiResponse.json();
};

export default page;
