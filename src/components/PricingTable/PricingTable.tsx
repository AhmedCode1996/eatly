"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { MaxWidthWrapper } from "..";
import { PRICING_TABLE } from "@/data/pricingTable";
import Image from "next/image";
import styles from "./styles.module.css";

export default function PricingTable() {
  return (
    <MaxWidthWrapper>
      <Table removeWrapper aria-label="Pricing table">
        <TableHeader>
          <TableColumn>
            <p className={styles.tableHeader}>
              <h2>pricing</h2>
              <h4>Affordable Basic& Pro Plans</h4>
            </p>
          </TableColumn>
          <TableColumn>
            <p className={styles.tableHeader}>
              <h2>basic</h2>
              <h4>completely free</h4>
            </p>
          </TableColumn>
          <TableColumn>
            <p className={styles.tableHeader}>
              <h2>premium</h2>
              <h4>amazing premium features</h4>
            </p>
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className={styles.pricingCell}>
            <TableCell>{""}</TableCell>
            <TableCell>
              <p className={styles.pricing}>
                <span className={styles.pricingSign}>$</span>0
                <span className={styles.pricingMonth}>/month</span>
              </p>
            </TableCell>
            <TableCell>
              <p className={styles.pricing}>
                <span className={styles.pricingSign}>$</span>5
                <span className={styles.pricingMonth}>/month</span>
              </p>
            </TableCell>
          </TableRow>
          {
            PRICING_TABLE.map((item) => {
              return (
                <TableRow key={item.id + 2}>
                  <TableCell className={styles.cellTitle}>
                    {item.title}
                  </TableCell>
                  <TableCell>
                    <Image
                      src={`/pricing/${item.basic ? "Tick" : "Cross"}.png`}
                      alt={`${item.title}`}
                      width={30}
                      height={30}
                    />
                  </TableCell>
                  <TableCell>
                    <Image
                      src={`/pricing/${item.premium ? "Tick" : "Cross"}.png`}
                      alt={`${item.title}`}
                      width={30}
                      height={30}
                    />
                  </TableCell>
                </TableRow>
              );
            }) as any
          }
        </TableBody>
      </Table>
    </MaxWidthWrapper>
  );
}
