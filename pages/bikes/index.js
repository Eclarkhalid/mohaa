import DashboardLayout from "@/components/DashboardLayout";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Bikes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/product').then(response => {

      setProducts(response.data);
    });
  }, []);
  return <>
    <DashboardLayout>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">The Best Bikes!</h1>

              <p className="mt-1.5 text-sm text-gray-500">Let's create a new bike! 🎉</p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <Link href={'/bikes/new'}>
                <Button>
                  Add Bike
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="px-8">
        {products.length === 0 ? (
          <p className="w-full text-center">No products available.</p>
        ) : (
          <Table className='px-8'>
            <TableHeader>
              <TableRow>
                <TableHead>Bike</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            {products.map(product => (
              <TableBody key={product._id}>
                <TableRow>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={product.images?.[0]} />
                    </Avatar>
                  </TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.price}</TableCell>
                </TableRow>
              </TableBody>
            ))
            }
          </Table>
        )}
      </div>
    </DashboardLayout>
  </>;
}

export default Bikes;