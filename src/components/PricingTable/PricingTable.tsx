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
      <Table removeWrapper aria-label="Pricing table" isStriped isHeaderSticky>
        <TableHeader>
          <TableColumn>
            <p className={styles.tableHeader}>
              <span>pricing</span>
              <span>Affordable Basic& Pro Plans</span>
            </p>
          </TableColumn>
          <TableColumn>
            <p className={styles.tableHeader}>
              <span>basic</span>
              <span>completely free</span>
            </p>
          </TableColumn>
          <TableColumn>
            <p className={styles.tableHeader}>
              <span>premium</span>
              <span>amazing premium features</span>
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
          <TableRow>
            <TableCell>{""}</TableCell>
            <TableCell>
              <div className={styles.btn}>
                <button>start free</button>
              </div>
            </TableCell>
            <TableCell>
              <div className={styles.btn}>
                <button>start pro</button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </MaxWidthWrapper>
  );
}
