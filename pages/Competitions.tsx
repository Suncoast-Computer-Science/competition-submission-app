import React from "react";
import { GetServerSideProps } from "next";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { Competition } from "@lib/types";
import { CompetitionCard } from "@components/Cards";

interface Props {
  competitions: Competition[];
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const snapshot = await getDocs(collection(getFirestore(), "competitions"));
  let competitions = [];
  snapshot.forEach((data) => {
    competitions.push(data.data());
  });
  return {
    props: { competitions: JSON.parse(JSON.stringify(competitions)) }, // Serialize JSON
  };
}

export default function Competitions({ competitions }: Props) {
  return (
    <main>
      {competitions.map((competition: Competition, index) => (
        <CompetitionCard {...competition} />
      ))}
    </main>
  );
}
