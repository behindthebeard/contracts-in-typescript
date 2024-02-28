import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { Gpu } from '../backend-api';
import { useGpuById } from '../hooks/gpus';
import { Separator } from './ui/separator';

type Props = {
  id?: Gpu['id'];
};

export function GpuDialog({ id }: Props) {
  const { data, isLoading } = useGpuById(id);

  if (isLoading) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <EyeOpenIcon />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Loading...</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  if (data) {
    const { brand, model, imageUrl, description } = data;

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <EyeOpenIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{brand + ' ' + model}</DialogTitle>
          </DialogHeader>
          <Separator />
          {imageUrl && (
            <div
              style={{
                width: '100%',
                position: 'relative',
                paddingTop: '100%',
              }}
            >
              <Image
                alt={brand + ' ' + model}
                src={imageUrl}
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <p className="leading-5">{description}</p>
          <Separator />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
}
